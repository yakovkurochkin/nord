const { spec } = require('pactum');
const testCases = require('../test-data/test-cases');

describe('Validate IPs insights endpoint', () => {
  it.each(testCases)('Case: $name', async ({ ip, statusCode, response }) => {
    await spec()
      .get('https://api.nordvpn.com/v1/helpers/ips/insights')
      .withQueryParams('ip', ip)
      .expectStatus(statusCode)
      .expectJson(response);
  });
});
