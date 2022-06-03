import { useAuthStore } from '@/stores/auth'
import { getToken, deleteToken } from '@/helpers/sso'
import axios from 'axios'
import type { RouteLocationNormalized } from 'vue-router'

export default async (to: RouteLocationNormalized) => {
  const path = to.path
  const authStore = useAuthStore()
  let { user } = authStore
  const token = getToken()

  if (token && !user.id) {
    const { data } = await axios.get('/me')
    if (data.code == 0) {
      user = data.user
      authStore.setUser(user)
    } else {
      deleteToken()
    }
  }

  if (!user.id) {
    const isLoginOnlyPage = path.startsWith('/backend')
    if (path == '/' || isLoginOnlyPage) {
      return { name: 'login' }
    }
  } else {
    if (path == '/login'
      || path == '/') {
      return { name: 'dashboard' }
    }
  }
}
