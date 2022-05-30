<template>
  <li
    class="page-item px-1"
    :class="className"
  >
    <span
      v-if="className"
      class="page-link"
    >
      {{ text }}
    </span>

    <!-- SPA khi có thay đổi hash sẽ reload trang, do đó không để hash kiểu href = '#' + page -->
    <a
      v-else
      class="page-link"
      href="javascript:;"
      @click.stop.prevent="$emit('change')"
      v-html="text"
    >
    </a>
  </li>
</template>


<script setup lang="ts">
// import { defineProps } from 'vue'

/*
defineProps([
  'className',
  'text',
])
*/

/*
defineProps({
  className: String,
  text: String,
})
*/

defineProps<{
  className?: string
  text?: string
}>()
</script>
