import { defineStore } from 'pinia'

interface User {
  id: number | null
  userName: string
}

interface AuthState {
  user: User
}

export const useAuthStore = defineStore({
  id: 'auth',

  state: (): AuthState => ({
    user: {
      id: null,
      userName: '',
    },
  }),

  actions: {
    setUser(user: User) {
      this.user = user
    },
  },
})
