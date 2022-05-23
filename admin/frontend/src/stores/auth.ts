import { defineStore } from 'pinia'

interface User {
  id: number | null
  userName: string
}


export const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    user: {
      id: null,
      userName: '',
    },
  }),

  actions: {
    setUser(user: User) {
      this.user = user
      console.log(1)
    },
  },
})
