<template>
    <QuizHeader />
    <QuizQuestion />

    <QuizFooter/>
</template>

<script setup>
    import { provide, ref } from 'vue';
    import QuizFooter from './QuizFooter.vue';
    import QuizHeader from './QuizHeader.vue';
    import QuizQuestion from './QuizQuestion.vue';


    let props = defineProps({
        quiz: Object
    });

    provide('quiz', props.quiz);
    
</script>