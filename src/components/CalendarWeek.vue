<template>
    <div class="w-full mb-12">
        <div class="p-0 flex flex-row">
            <CalendarDay v-for="day in sharedState.data" :key="day.id" :day="day"/>
        </div>
    </div>
</template>
<script setup>
import store  from "../store/store.js";
import CalendarDay from "./CalendarDay.vue";
let sharedState = store.state;

</script>