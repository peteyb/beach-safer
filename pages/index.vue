<template>
  <h1>Beach Safe</h1>
  <ul>
    <li v-for="(time, index) in times" :key="index">
      {{ $dayjs(time.DateTime).format("Do MMMM YYYY hh:mmA") }}: {{ time.EventType }}
      <span v-if="time.Height">({{ Number(time.Height).toFixed(2) }}m)</span>
    </li>
  </ul>
  <h2>Current weather</h2>
  <p>Temperature: {{ weather.main.temp }}&#8451</p>
  <p>Feels like: {{ weather.main.feels_like }}&#8451</p>
</template>

<script setup lang="ts">
import { TideObject, WeatherObject } from '~/types'

const { data: times} = await useFetch<TideObject[]>(
  "https://beach-safer.netlify.app/.netlify/functions/tidal-events",
  { parseResponse: JSON.parse }
);

const { data: weather } = await useFetch<WeatherObject>(
  "https://beach-safer.netlify.app/.netlify/functions/current-weather",
  { parseResponse: JSON.parse }
);
</script>

<style></style>
