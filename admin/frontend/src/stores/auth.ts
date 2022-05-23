import { defineStore } from 'pinia'

interface User {
  id: number
  userName: string
}


export const useAuthStore = defineStore({
  id: 'auth',

  state: () => ({
    user: {
      id: 1,
      userName: 'lockex1987',
    },
  }),

  actions: {
    setUser(user: User) {
      this.user = user
    },
  },
})
