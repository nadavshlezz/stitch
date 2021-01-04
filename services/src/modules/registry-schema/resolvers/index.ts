import { IResolvers } from 'graphql-tools';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import {
  BasePolicyInput,
  PolicyInput,
  ResourceGroupInput,
  ResourceGroupMetadataInput,
  ResourceMetadataInput,
  SchemaInput,
  UpstreamClientCredentialsInput,
  UpstreamInput,
} from '../types';
import handleUpdateResourceGroupRequest from './update-resource-group';
import handleDeleteResourcesRequest from './delete-resources';

const resolvers: IResolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  Query: {
    validateResourceGroup: (_, args: { input: Partial<ResourceGroupInput> }, context) =>
      handleUpdateResourceGroupRequest(args.input, context.activeDirectoryAuth, true),

    validateSchemas: (_, args: { input: SchemaInput[] }, context) =>
      handleUpdateResourceGroupRequest({ schemas: args.input }, context.activeDirectoryAuth, true),

    validateUpstreams: (_, args: { input: UpstreamInput[] }, context) =>
      handleUpdateResourceGroupRequest({ upstreams: args.input }, context.activeDirectoryAuth, true),

    validateUpstreamClientCredentials: (_, args: { input: UpstreamClientCredentialsInput[] }, context) =>
      handleUpdateResourceGroupRequest({ upstreamClientCredentials: args.input }, context.activeDirectoryAuth, true),

    validatePolicies: (_, args: { input: PolicyInput[] }, context) =>
      handleUpdateResourceGroupRequest({ policies: args.input }, context.activeDirectoryAuth, true),

    validateBasePolicy: (_, args: { input: BasePolicyInput }, context) =>
      handleUpdateResourceGroupRequest({ basePolicy: args.input }, context.activeDirectoryAuth, true),
  },
  Mutation: {
    // Update
    updateResourceGroup: (_, args: { input: Partial<ResourceGroupInput> }, context) =>
      handleUpdateResourceGroupRequest(args.input, context.activeDirectoryAuth),

    updateSchemas: (_, args: { input: SchemaInput[] }, context) =>
      handleUpdateResourceGroupRequest({ schemas: args.input }, context.activeDirectoryAuth),

    updateUpstreams: (_, args: { input: UpstreamInput[] }, context) =>
      handleUpdateResourceGroupRequest({ upstreams: args.input }, context.activeDirectoryAuth),

    updateUpstreamClientCredentials: (_, args: { input: UpstreamClientCredentialsInput[] }, context) =>
      handleUpdateResourceGroupRequest({ upstreamClientCredentials: args.input }, context.activeDirectoryAuth),

    updatePolicies: (_, args: { input: PolicyInput[] }, context) =>
      handleUpdateResourceGroupRequest({ policies: args.input }, context.activeDirectoryAuth),

    updateBasePolicy: (_, args: { input: BasePolicyInput }, context) =>
      handleUpdateResourceGroupRequest({ basePolicy: args.input }, context.activeDirectoryAuth),

    // Deletion
    deleteResources: (_, args: { input: Partial<ResourceGroupMetadataInput> }) =>
      handleDeleteResourcesRequest(args.input),

    deleteSchemas: (_, args: { input: ResourceMetadataInput[] }) =>
      handleDeleteResourcesRequest({ schemas: args.input }),

    deleteUpstreams: (_, args: { input: ResourceMetadataInput[] }) =>
      handleDeleteResourcesRequest({ upstreams: args.input }),

    deleteUpstreamClientCredentials: (_, args: { input: ResourceMetadataInput[] }) =>
      handleDeleteResourcesRequest({ upstreamClientCredentials: args.input }),

    deletePolicies: (_, args: { input: ResourceMetadataInput[] }) =>
      handleDeleteResourcesRequest({ policies: args.input }),

    deleteBasePolicy: (_, args: { input: boolean }) => handleDeleteResourcesRequest({ basePolicy: args.input }),
  },
};

export default resolvers;