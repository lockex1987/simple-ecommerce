import { defineStore } from 'pinia'

interface User {
  id: number | null
  userName: string
}

interface AuthState {
  user: User
  beforeLoginPath: string
}

export const useAuthStore = defineStore({
  id: 'auth',

  state: (): AuthState => ({
    user: {
      id: null,
      userName: '',
    },
    beforeLoginPath: '',
  }),
})
