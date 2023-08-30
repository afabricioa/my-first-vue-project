<script setup>
    import {useTeamStore} from "@/stores/TeamStore";
    import ModalView from '../../views/ModalView.vue';
    import {useFlash} from '../../../composables/useFlash';
    import { ref } from "vue";

    let showModal = ref(false);
    let team = useTeamStore();
    const flash = useFlash();

    let nameMember = ref('');
    let emailMember = ref('')

    function addMember(){
        if(team.remainingSpots > 0){
            team.add(nameMember.value, emailMember.value);
        }else{
            flash('Error', 'You can`t add member anymore', 'error')
        }
        nameMember.value = '';
        emailMember.value = '';
    }
</script>

<template>
    <button 
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400" 
        :disabled="team.remainingSpots === 0"
        @click="showModal = true"
    >
        Add Member ({{ team.remainingSpots }} Spots Left)
    </button>
    <!-- pai para filho - props
    filho para pai - events($emit) -->
    <!-- general good practice to place modal at the end of the body -->
    <Teleport to="body">
        <ModalView :show="showModal" @close="showModal = false">
        <template #default>
            <p>Add a new member to the team.</p>
            <form class="mt-6" @submit.prevent="addMember">
                <div class="p-2">
                    <input v-model="nameMember" placeholder="Name"/>
                    <input v-model="emailMember" type="email" placeholder="Email" />
                    <button>Add</button>
                </div>
            </form>
        </template>
        </ModalView>
    </Teleport>
</template>