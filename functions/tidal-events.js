const fetch = require('node-fetch')

const API_ENDPOINT =
  'https://admiraltyapi.azure-api.net/uktidalapi/api/V1/Stations/0543/TidalEvents?duration=1'
const { OCI_API_KEY } = process.env

exports.handler = async function (event, context) {
  return fetch(API_ENDPOINT, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      Accept: 'application/json',
      'Ocp-Apim-Subscription-Key': OCI_API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify(data),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }))
}
