<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/product">Product</RouterLink>
      <RouterLink to="/cart">Cart</RouterLink>
      <RouterLink to="/checkout">Checkout</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
/* import '@/assets/base.css'; */
</style>
