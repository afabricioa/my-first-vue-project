<template>
    <div>
        <h5>{{ state.name }}</h5>

        <ul>
            <li><a href="#">Get a Job</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </div>
</template>

<script setup>
    import {state} from "../../stores/quizStore";
    // import { inject } from 'vue';
    // let quiz = inject('quiz')
</script>  