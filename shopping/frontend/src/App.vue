<template>
  <Nav />

  <div class="container py-3">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Nav from '@/components/Nav.vue'
import { RouterView } from 'vue-router'
import { useProductStore } from '@/stores/products'
import { usePersistCart } from '@/composables/usePersistCart'

const productStore = useProductStore()
productStore.getAll()
usePersistCart()
</script>
