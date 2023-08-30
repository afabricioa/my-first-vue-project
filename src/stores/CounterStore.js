// import { reactive } from "vue";

// export let counter = reactive({
//     //state
//     count: 0,

//     //actions
//     increment(){
//         this.count++;
//     }
// })

import { defineStore } from "pinia";

export let useCounterStore = defineStore('counter', {
    state() {
        return {
            count: 0
        };
    },

    actions: {
        increment(){
            if(this.count <= 10){
                this.count++;
            }
        }
    },

    //computed properties
    getters: {
        remaining(){
            return 10 - this.count;
        }
    }
})