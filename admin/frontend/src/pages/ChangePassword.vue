<template>
  <form
    @submit.prevent="changePassword()"
    ref="root"
  >
    <div class="mb-3 validate-container">
      <label class="form-label required">
        Mật khẩu cũ
      </label>

      <div class="input-group form-control-max-width">
        <input
          v-model.trim="oldPassword"
          :type="showOldPassword ? 'text' : 'password'"
          class="form-control"
          placeholder="Mật khẩu cũ"
          data-validation="required"
          autocomplete="new-password"
        />

        <span
          class="input-group-text cursor-pointer"
          @click="toggleOldPassword()"
          :title="showOldPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'"
        >
          <i
            class="bi"
            :class="[showOldPassword ? 'bi-eye-slash' : 'bi-eye']"
          ></i>
        </span>
      </div>
    </div>

    <div class="mb-3 validate-container">
      <label class="form-label required">
        Mật khẩu mới
      </label>

      <div class="input-group form-control-max-width">
        <input
          v-model.trim="newPassword"
          :type="showNewPassword ? 'text' : 'password'"
          class="form-control"
          placeholder="Mật khẩu mới"
          data-validation="required|minLength:8|maxLength:50"
          autocomplete="new-password"
          @keydown="handleCapsLockWarning($event)"
        />
        <!-- password|passwordStrong -->

        <span
          class="input-group-text cursor-pointer"
          @click="toggleNewPassword()"
          :title="showNewPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'"
        >
          <i
            class="bi"
            :class="[showNewPassword ? 'bi-eye-slash' : 'bi-eye']"
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

    <div>
      <button
        class="btn btn-primary btn-ripple"
        type="submit"
      >
        Đổi mật khẩu
        <span
          class="spinner-border spinner-border-sm"
          v-show="isProcessing"
        ></span>
      </button>

      <button
        class="btn btn-outline-primary btn-ripple ms-3"
        type="button"
        @click="cancelForm()"
      >
        Hủy
      </button>
    </div>
  </form>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import noti from '@/helpers/noti'
import CV from '@/helpers/common-validation'

// Mật khẩu cũ
const oldPassword = ref('')
const showOldPassword = ref(false)

// Mật khẩu mới
const newPassword = ref('')
const showNewPassword = ref(false)

// Đánh dấu đang xử lý
const isProcessing = ref(false)

// Có phải đang bật Caps Lock hay không
const isCapsLockOn = ref(false)

const root = ref<HTMLElement | null>(null)


/**
 * Khi Caps Lock đang được bật thì cảnh báo người dùng.
 * Đơn giản, nhưng rất hữu ích.
 */
const handleCapsLockWarning = (evt: KeyboardEvent) => {
  // Thêm đoạn kiểm tra getModifierState vì khi focus thì bị lỗi
  if (evt.getModifierState) {
    isCapsLockOn.value = evt.getModifierState('CapsLock')
  }
}

/**
 * Ẩn / hiện password cũ.
 */
const toggleOldPassword = () => {
  showOldPassword.value = !showOldPassword.value
}

/**
 * Ẩn / hiện password mới.
 */
const toggleNewPassword = () => {
  showNewPassword.value = !showNewPassword.value
}

/**
 * Đổi mật khẩu.
 */
const changePassword = async () => {
  if (isProcessing.value) {
    return
  }

  if (CV.invalidForm(root.value)) {
    return
  }

  isProcessing.value = true
  const params = {
    oldPassword: oldPassword.value,
    newPassword: newPassword.value,
  }
  const { data } = await axios.post('/change-password', params)
  isProcessing.value = false

  if (data.code == 0) {
    cancelForm()
    noti.success('Đổi mật khẩu thành công')
  } else if (data.code == 1) {
    noti.error(data.message)
  }
}

/**
 * Nhấn nút hủy.
 */
const cancelForm = () => {
  // Xóa các thông báo lỗi (nếu có)
  // CV.clearErrorMessages(this.$el)

  // Reset lại form
  oldPassword.value = ''
  newPassword.value = ''
  showOldPassword.value = false
  showNewPassword.value = false
}
</script>
