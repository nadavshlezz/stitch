const {GraphQLClient} = require('graphql-request');
const dockerCompose = require('docker-compose');
const waitFor = require('../waitFor');

const gatewayClient = new GraphQLClient('http://localhost:8080/graphql');
const registryClient = new GraphQLClient('http://localhost:8090/graphql');

const nonDefaultSchema = {
    metadata: {namespace: 'namespace', name: 'name'},
    schema: 'type Query { default: String! @stub(value: "NOPE") }',
};

const createSchemaMutation = `
mutation CreateSchema($schema: SchemaInput!) {
    updateSchemas(input: [$schema]) {
        success
    }
}`;

const sleep = (timeout: number) => new Promise(r => setTimeout(r, timeout));

describe('Basic flow', () => {
    test('Default schema works', async () => {
        const response = await gatewayClient.request(`query {default}`);

        expect(response.default).toBe('default');
    });

    test('Gateway updates when updating schema in registry', async () => {
        const response1 = await registryClient.request(createSchemaMutation, {schema: nonDefaultSchema});
        expect(response1.updateSchemas.success).toBe(true);

        // Wait for gateway to update
        await sleep(500);

        const response2 = await gatewayClient.request(`query {default}`);
        expect(response2.default).toBe('NOPE');
    });
});