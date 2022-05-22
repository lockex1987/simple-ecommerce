<template>
  <div
    v-if="quantityInCart > 0"
    class="btn-group w-100"
  >
    <button
      class="btn btn-light"
      @click="cartStore.remove(product.id)"
    >
      -
    </button>

    <button class="btn btn-ghost no-animation">
      {{ quantityInCart }}
    </button>

    <button
      class="btn btn-light"
      @click="cartStore.add(product.id)"
    >
      +
    </button>
  </div>

  <button
    v-else
    class="btn btn-light w-100"
    @click="cartStore.add(product.id)"
  >
    Add to Cart
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/stores/products'

const props = defineProps<{
  product: Product
}>()

const cartStore = useCartStore()

const quantityInCart = computed<number>(() => {
  const temp = cartStore.contents[props.product.id]
  return temp?.quantity ?? 0
})
</script>
