import { defineStore } from 'pinia'
import axios from 'axios'

const fakeStoreUrl = 'https://fakestoreapi.com'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

interface ProductState {
  items: Record<string, Product>
  ids: number[]
}

export const useProductStore = defineStore({
  id: 'products',

  state: (): ProductState => ({
    items: {},
    ids: [],
  }),

  getters: {
    list: (state): Product[] => state.ids.map(i => state.items[i]),

    loaded(): boolean {
      return this.ids.length > 0
    },
  },

  actions: {
    async fetchAll() {
      if (this.loaded) {
        return
      }
      const resp = await axios.get(`${fakeStoreUrl}/products`)
      const data: Product[] = resp.data
      this.ids = data.map(product => {
        this.items[product.id] = product
        return product.id
      })
    },
  },
})
