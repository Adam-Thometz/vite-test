<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Search from './components/Search/Search.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Search />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/profile/lemon">User Profile</RouterLink>
        <RouterLink to="/show/3116541">Taskmaster</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #454545;
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
  header {
    padding-left: 20px;
    padding-top: 45vh;
    padding-right: 40px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    /* height: 100%; */
    /* display: flex;
    place-items: flex-start;
    flex-wrap: wrap; */
    position: sticky;
    top: 60px;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
