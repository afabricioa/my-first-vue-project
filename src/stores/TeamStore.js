import {defineStore} from "pinia";
import team from "@/team.json";
export let useTeamStore = defineStore('team', {
    state(){
        return{
            name: '',
            spots: 0,
            members: []

        }
    },

    actions: {
        async fill(){
            let response = await import('@/team.json');

            let data = response.default;

            this.$patch({
                name: data.name,
                spots: data.spots,
                members: data.members
            });

            // this.$state = r.default;
        },
        add(name, email){
            this.$patch((state) => {
                state.members.push({name: name, email: email, status: "Active"})
            })
        }
    },

    getters: {
        remainingSpots(){
            return this.spots - this.members.length;
        }
    }
});