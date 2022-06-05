<template>
  <div class="py-4 d-flex">
    <img
      :src="cartProduct.image"
      alt="Product image"
      class="me-4"
      style="width: 5rem"
    />

    <div>
      <div>
        <RouterLink
          class="text-decoration-none text-body"
          :to="`/product/${cartProduct.id}`"
        >
          {{ cartProduct.title }}
        </RouterLink>
      </div>

      <div class="mb-3 fw-bold text-muted">
        {{ toCurrency(cartProduct.cost) }}
      </div>

      <div>
        <div class="btn-group">
          <button
            class="btn btn-light"
            @click="cartStore.remove(cartProduct.id)"
          >
            -
          </button>

          <button class="btn btn-ghost no-animation">
            {{ cartProduct.quantity }}
          </button>

          <button
            class="btn btn-light"
            @click="cartStore.add(cartProduct.id)"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import type { CartPreview } from '@/stores/cart'
import { toCurrency } from '@/composables/common'

const cartStore = useCartStore()

defineProps<{
  cartProduct: CartPreview
}>()
</script>
