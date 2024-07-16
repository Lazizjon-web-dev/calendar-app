<template>
  <div class="w-full bg-gray-600 text-white text border-l-2 border-b-2 border-solid border-gray-400 cursor-pointer transition-colors last:border-r-2 last:border-solid last:border-gray-400 hover:bg-gray-700" @click="setActiveDay(day.id)">
    <div class="bg-gray-700 p-2.5 text-white text font-semibold text-center uppercase">{{ day.abbvTitle }}</div>
    <div class="p-2.5">
        <div>{{ day.id }}</div>
        <CalendarEvent v-for="(event,index) in day.events" :key="index" :eventIndex="index" :event="event" :day="day"/>
    </div>
  </div>
</template>

<script  setup>
import store from '@/store/store';
import CalendarEvent from './CalendarEvent.vue';
const setActiveDay = (id) => {
    store.commit('setActiveDay', id);
};
const { day } = defineProps({
    day: Object,
})
</script>
<style lang="scss" scoped>
input{
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;
    &:focus{
        outline: none;
    }
}
</style>