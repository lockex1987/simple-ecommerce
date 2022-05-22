<template>
  <div class="col-md-6 col-lg-4 col-xl-3 mb-3">
    <div class="card h-100">
      <img
        :src="product.image"
        alt="Product image"
        class="card-img-top mt-3"
        style="height: 12rem; object-fit: contain;"
      />

      <div class="card-body d-flex flex-column">
        <div class="card-title">
          <RouterLink
            class="text-decoration-none text-body"
            :to="`/product/${product.id}`"
          >
            {{ product.title }}
          </RouterLink>
        </div>

        <div class="card-text mb-3 mt-auto">
          {{ toCurrency(product.price) }}
        </div>

        <div>
          <button
            class="btn btn-light w-100"
            @click="cartStore.add(product.id)"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/stores/products'
import { toCurrency } from '@/shared/utils'

const cartStore = useCartStore()

defineProps<{
  product: Product;
}>()
</script>
