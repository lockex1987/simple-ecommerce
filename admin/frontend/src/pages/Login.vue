<template>
  <div
    class="mx-auto mt-5"
    style="max-width: 500px"
  >
    <form @submit.prevent="processLogin()">
      <div
        v-if="errorMessage"
        class="mb-3 text-center text-danger"
      >
        {{ errorMessage }}
      </div>

      <div class="mb-3 validate-container">
        <input
          v-model.trim="userName"
          type="text"
          class="form-control form-control-rounded"
          placeholder="Tên đăng nhập"
          data-validation="required"
          autofocus
          autocomplete="username"
          spellcheck="false"
        />
      </div>

      <div class="mb-3 validate-container">
        <div class="input-group">
          <input
            v-model.trim="password"
            :type="showPassword ? 'text' : 'password'"
            class="form-control form-control-rounded"
            placeholder="Mật khẩu"
            data-validation="required"
            autocomplete="current-password"
            @keydown="handleCapsLockWarning($event)"
          >

          <span
            class="input-group-text cursor-pointer input-group-text-rounded"
            @click="togglePassword()"
            :title="showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'"
          >
            <i
              class="bi"
              :class="[showPassword ? 'bi-eye-slash' : 'bi-eye']"
            ></i>
          </span>
        </div>

        <div
          class="mt-1 font-size-0.875 text-warning"
          v-show="isCapsLockOn"
        >
          * Đang bật Caps Lock
        </div>
      </div>

      <div class="mb-3">
        <button
          class="btn btn-primary w-100 btn-ripple btn-rounded"
          type="submit"
        >
          Đăng nhập
          <span
            class="spinner-border spinner-border-sm"
            v-show="isProcessing"
          ></span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { setToken } from '@/helpers/sso'
import axios from 'axios'

const authStore = useAuthStore()

const router = useRouter()

const userName = ref('')
const password = ref('')
const errorMessage = ref('')
const showPassword = ref(false)
const isProcessing = ref(false)
const isCapsLockOn = ref(false)

const processLogin = async () => {
  if (isProcessing.value) {
    return
  }

  isProcessing.value = true
  const params = {
    userName: userName.value,
    password: password.value,
  }
  const { data } = await axios.post('/login', params)
  isProcessing.value = false

  if (data.code == 0) {
    errorMessage.value = ''
    setToken(data.token)
    authStore.setUser(data.user)
    router.push({ name: 'dashboard' })
  } else {
    errorMessage.value = data.message
  }
}

const handleCapsLockWarning = evt => {
  // Thêm đoạn kiểm tra getModifierState vì khi focus thì bị lỗi
  if (evt.getModifierState) {
    isCapsLockOn.value = evt.getModifierState('CapsLock')
  }
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>
