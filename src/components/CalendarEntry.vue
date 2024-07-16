<template>
    <div class="bg-white p-4 rounded-xl mb-6">
        <div>
            <input class=" border-b pt-3 pb-1 text-lg px-2 focus:outline-none mb-4" type="text" placeholder="New Event" v-model="input" @keypress.enter="submitEvent" />
            <p class="text-xl text-green-600 flex justify-between">
                Day of event: <span class="font-bold">{{  activeDay }}</span>
            </p>
            <button class="block border-2 border-blue-500 text-xl text-blue-500 font-bold mt-4 mx-auto py-2 px-6 rounded-md transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white" @click="submitEvent">Submit</button>
        </div>
        <p v-if="error" class="text-red-500 text-sm">
            You must type something first!
        </p>
    </div>
</template>

<script setup>
import { computed, ref} from 'vue';
import store from '@/store/store';
let input = ref('');
let error = ref(false);
const submitEvent = () => {
    if(input.value.trim()){
        store.dispatch('submitEvent', input.value);
        input.value = '';
        error.value = false;
    }else{
        error.value = true;
    }
};
let activeDay = computed(() => store.getters.getActiveDay.fullTitle);


</script>