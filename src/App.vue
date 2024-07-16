<script setup>
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarEntry from "./components/CalendarEntry.vue"
</script>

<template>
  <main class="h-full bg-gray-500 flex flex-col items-center justify-center">
    <CalendarWeek />
    <CalendarEntry />
  </main>
</template>