<script setup>
    import TeamFooter from './TeamFooter.vue';
    import TeamHeader from './TeamHeader.vue';
    import TeamTable from './TeamTable.vue';
    
    import {useTeamStore} from "@/stores/TeamStore";

    const teamStore = useTeamStore();
    teamStore.fill();
</script>

<template>
  <TeamHeader/>

  <div class="place-self-center flex flex-col gap-y-3">
    <TeamTable/>
  </div>

  <TeamFooter/>
  
</template>