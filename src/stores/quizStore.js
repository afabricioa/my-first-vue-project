import { reactive } from "vue";

export let state = reactive({ //reactive faz com que o estado possa ser manipulado, alterado
    name: 'My second quiz', 
    questions: []
});