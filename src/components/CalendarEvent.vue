<template>
    <div :class="`block bg-${  ['green','blue','red','yellow','pink'][Math.floor(Math.random() * 5)] }-300 my-1.5 p-1.5 text-gray-600`">
        <div v-if="event.edit">
            <input class="bg-transparent border-b py-1 placeholder:text-gray-500 px-2 focus:outline-none mb-4" type="text" :placeholder="event.details" v-model="newEventDetails" @keypress.enter="updateEvent">
            <div class="text-center">
                <i class="pi pi-check py-0 px-0.5" @click="updateEvent"></i>
            </div>
        </div>
        <div v-else>
            <span class="block text-center">{{ event.details }}</span>
            <div class="text-center">
                <i @click="editEvent" class="pi pi-pencil py-0 px-0.5"></i>
                <i @click="deleteEvent"  class="pi pi-trash py-0 px-0.5"></i>
            </div>
        </div>
    </div>
</template>
<script setup>
import store from '@/store/store';
import { ref } from 'vue';

const newEventDetails = ref("")

const updateEvent = ()=>{
    store.dispatch('updateEvent',{dayId:day.id,eventIndex,updatedEventDetails: newEventDetails.value.trim()})
    newEventDetails.value = ""; 
}

const editEvent = ()=>{
    store.dispatch('editEvent',{dayId:day.id,eventIndex})
}

const deleteEvent = ()=>{
    store.dispatch('deleteEvent',{dayId:day.id,eventIndex});
}

const { event, eventIndex, day } = defineProps({
    event: Object,
    eventIndex: Number,
    day: Object,
});

</script>