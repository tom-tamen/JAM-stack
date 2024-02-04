<script lang="ts" setup>
</script>

<template>
  <nav class="w-full">
    <div class="container">
        <NuxtLink to="/">
          <NuxtImg alt="logo" aria-hidden="true" class="h-16" src="/grass.png" />
        </NuxtLink>
        <h1>JamCraft</h1>
        <button @click="toggleColorMode">
          <img
            :alt="`bouton ${$colorMode.preference === 'dark' ? 'light' : 'dark'} mode`"
            :src="`/${$colorMode.preference === 'dark' ? 'aether' : 'nether'}.png`"
          />
        </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleColorMode() {
      this.$colorMode.preference = this.$colorMode.preference === 'dark' ? 'light' : 'dark';
    }
  }
}
</script>

<style scoped>

h1 {
  color: var(--color-text);
  font-family: 'Monocraft';
}

button {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 20px;
}

nav {
  box-shadow: 0 0 10px 0 var(--color-shadow);
  padding: 1rem 0;
  background-color: var(--color-nav);
}

nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 1rem;
}

@media screen and (max-width: 600px) {
  h1{
    font-size: 18px;
  }

  nav *{
    margin: 0;
    padding: 0;
  }
  
  nav .container {
    padding: 0;
  }
}
</style>