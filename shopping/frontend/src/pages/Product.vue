<template>
  <main>
    <h4>
      Product detail
    </h4>

    <div>
      <div v-if="!productStore.loaded">
        <CartCardSkeleton />
      </div>

      <div v-else-if="product">
        <div class="row">
          <div class="col-md-6">
            <img
              :src="product.image"
              alt="Product image"
              class="w-100"
              style="height: 25rem; object-fit: contain;"
            />
          </div>

          <div class="col-md-6">
            <div class="fs-3 mb-3">
              {{ product.title }}
            </div>

            <div class="mb-3 text-muted">
              {{ product.description }}
            </div>

            <div class="mb-3 fw-bolder">
              {{ toCurrency(product.price) }}
            </div>

            <div style="max-width: 12rem">
              <IsInCart :product="product" />
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="fs-3 text-danger">
          No product found with id {{ route.params.productId }}
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import CartCardSkeleton from '@/components/CartCardSkeleton.vue'
import IsInCart from '@/components/IsInCart.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/products'
import type { Product } from '@/stores/products'
import { toCurrency } from '@/shared/utils'

const productStore = useProductStore()
const route = useRoute()
const product = computed<Product>(() => productStore.items[route.params.productId as string])
</script>
