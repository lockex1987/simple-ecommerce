<template>
  <main>
    <h4>
      Dashboard
    </h4>

    <div class="mb-3">
      <ElButton>I am ElButton</ElButton>
    </div>

    <div>
      <ElButton
        plain
        @click="open1"
      > Success </ElButton>
      <ElButton
        plain
        @click="open2"
      > Warning </ElButton>
      <ElButton
        plain
        @click="open3"
      > Info </ElButton>
      <ElButton
        plain
        @click="open4"
      > Error </ElButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ElNotification, ElButton } from 'element-plus'

const open1 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  ElNotification({
    // title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  ElNotification({
    // title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>
