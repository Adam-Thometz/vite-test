<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="welcome">
    <div class="inside"></div>
    <TheWelcome />
  </main>
</template>

<style lang="scss">
main.welcome {
  color: #626262;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
}
</style>
