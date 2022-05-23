<template>
  <div
    class="mx-auto mt-5"
    style="max-width: 500px"
  >
    <form @submit.prevent="processLogin()">
      <h4>
        Login
      </h4>

      <div>
        <button
          type="submit"
          class="btn btn-primary"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const router = useRouter()

const processLogin = () => {
  authStore.setUser({
    id: 1,
    userName: 'lockex1987',
  })
  router.push({ name: 'dashboard' })
}
</script>
