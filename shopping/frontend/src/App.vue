<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <RouterLink
        to="/"
        class="navbar-brand"
      >
        SeC
      </RouterLink>

      <RouterLink
        to="/cart"
        class=""
      >
        <i class="bi bi-cart fs-5"></i>
        <span class="px-2 bg-primary text-white badge ms-1">
          1
        </span>
      </RouterLink>
    </div>
  </nav>

  <div class="container py-3">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss">
/* import '@/assets/base.css'; */
.nav {
  a {
    color: red;
  }
}
</style>
