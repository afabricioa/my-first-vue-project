<script setup>
  import { ref, watch } from "vue";
  import {useFlash} from "../../composables/useFlash"
  import {useStorage} from "../../composables/useStorage";

  // import TabbableTextArea from "../components/TabbableTextArea.vue";

  // const flash = useFlash();

  // let food = useStorage('food'); //composable
  // let age = useStorage('age');

  // let comment = ref('test value a');

  import Quiz from "../components/Quiz/Quiz.vue";
  import {state} from "../stores/quizStore";
</script>

<template>
  <main>
    <!-- <p>
      <button @click="flash('It Works!')">Click Me</button>
      What is yout favorite food?  <br/>
      <input type="text" v-model="food"/>
      <br/>
      What is yout age? <br/>
      <input type="text" v-model="age"/>

      <form>
        <TabbableTextArea v-model:comment="comment" style="width: 100%; height: 300px;"/>
      </form>
    </p> -->
    <Quiz :quiz="state"/>
  </main>
</template>
