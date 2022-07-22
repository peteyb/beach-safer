const fetch = require('node-fetch')

const { OPEN_WEATHER_KEY } = process.env
const API_ENDPOINT =
  `https://api.openweathermap.org/data/2.5/weather?q=Bude&units=metric&appid=${OPEN_WEATHER_KEY}`

exports.handler = async function (event, context) {
  return fetch(API_ENDPOINT, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify(data),
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }))
}
