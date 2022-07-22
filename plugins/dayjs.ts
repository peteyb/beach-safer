import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.extend(advancedFormat);

  nuxtApp.provide("dayjs", dayjs);
});
