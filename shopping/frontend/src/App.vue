<template>
  <Nav />

  <div class="container py-3">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from './stores/products'
import { usePersistCart } from './composables/usePersistCart'
import Nav from './components/Nav.vue'
import { RouterView } from 'vue-router'

const productStore = useProductStore()
productStore.fetchAll()
usePersistCart()
</script>
