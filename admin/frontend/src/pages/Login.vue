<template>
  <div
    class="mx-auto mt-5"
    style="max-width: 500px"
  >
    <h4>
      Login
    </h4>

    <div>
      <RouterLink :to="{ name: 'dashboard' }">
        Login
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
