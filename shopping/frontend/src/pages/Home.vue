<template>
  <main>
    <h4>
      Home
    </h4>

    <!-- Product list -->
    <div class="row">
      <ProductCardSkeleton
        v-for="n in 15"
        :key="n"
        v-show="!productStore.loaded"
      />

      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import ProductCardSkeleton from '../components/ProductCardSkeleton.vue'
import { useProductStore } from '../stores/products'

const productStore = useProductStore()

const products = computed(() => productStore.list)
</script>
