import { FastifyRequest } from 'fastify';
import logger from '../../logger';
import { Upstream, UpstreamClientCredentials } from '../../resource-repository';
import { ActiveDirectoryAuth } from './active-directory-auth';

export async function getAuthHeaders(
  upstream: Upstream,
  upstreamClientCredentials: UpstreamClientCredentials[],
  activeDirectoryAuth: ActiveDirectoryAuth,
  originalRequest?: Pick<FastifyRequest, 'headers'>
) {
  // Try AD auth
  // TODO: Store upstreams in map for quick lookup

  if (upstream.auth) {
    // TODO: Store upstreamClientCredentials in map for quick lookup
    const credentials = upstreamClientCredentials.find(
      uc => uc.activeDirectory.authority === upstream.auth!.activeDirectory.authority
    );
    if (typeof credentials !== 'undefined') {
      try {
        const token = await activeDirectoryAuth.getToken(
          credentials.activeDirectory.authority,
          credentials.activeDirectory.clientId,
          credentials.activeDirectory.clientSecret,
          upstream.auth.activeDirectory.resource
        );

        return {
          Authorization: `Bearer ${token}`,
        };
      } catch (ex) {
        logger.error('Failed to authenticate with Active Directory', ex);
        throw ex;
      }
    }
  }

  // If AD auth doesn't apply, pass along the header we got from the request
  const incomingAuthHeader = originalRequest?.headers?.['authorization'];
  if (incomingAuthHeader) {
    return {
      Authorization: incomingAuthHeader as string,
    };
  }

  return;
}