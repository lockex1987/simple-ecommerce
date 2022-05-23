import { useAuthStore } from '@/stores/auth'

export default async to => {
  const path = to.path
  const authStore = useAuthStore()

  if (!authStore.user.id) {
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
