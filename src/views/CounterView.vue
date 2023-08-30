<template>
    <div class="counter">
        <h1>This is a Counter page</h1>
        {{ counter.count }} <br/>
        <button 
            @click="counter.increment()"
            :disabled="!counter.remaining"
            >
            Increment ({{ counter.remaining }} Remaining)
        </button>
    </div>
  </template>
  
<script setup>
    import {useCounterStore} from "@/stores/CounterStore";

    let counter = useCounterStore();
</script>