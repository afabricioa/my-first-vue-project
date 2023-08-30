<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TeamView from './views/TeamView.vue';
</script>

<template>
    <div class="mainDiv">
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/counter">Counter</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
      <RouterView /> -->
      <TeamView/>
    </div>
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  margin: 0 auto;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
