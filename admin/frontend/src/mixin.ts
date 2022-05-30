import { mapState } from 'pinia'
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

import { useAuthStore } from '@/stores/auth'
// const authStore = useAuthStore()

export default {
  data() {
    return {
      // authStore: useAuthStore(),
    }
  },

  computed: {
    /*
    loginUser() {
      return this.authStore.user
    },
    */

    // ...mapState(useAuthStore, ['user']),
    ...mapState(useAuthStore, { loginUser: 'user' }),
  },

  methods: {
    toCurrency: (value: number) => formatter.format(value),

    /**
     * Hiển thị số có ngăn cách hàng nghìn.
     * @param {Number} num Số
     */
    formatNumber(num: number | null) {
      if (!num) {
        return num
      }
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
  },
}
