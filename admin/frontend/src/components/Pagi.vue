<template>
  <div v-if="isInit">
    <!-- Nếu rỗng thì hiển thị thông báo không tồn tại dữ liệu -->
    <div
      v-if="pagi.total <= 0
        && appliedOptions.showNoRecordText
      "
      class="no-record text-warning text-center"
    >
      {{ appliedOptions.noRecordText }}
    </div>

    <div
      v-else
      class="d-lg-flex align-items-center justify-content-between"
    >
      <!-- Hiển thị tổng số bản ghi -->
      <div class="text-muted small mb-2 mb-md-0">
        Tổng số {{ formatNumber(pagi.total) }} bản ghi
      </div>

      <!-- Thẻ UL bao bên ngoài -->
      <ul
        class="pagination mb-0"
        v-if="pagi.last_page > 1"
      >
        <!-- Link đến trang đầu tiên -->
        <PagiItem
          v-if="pagi.current_page > 2
          && startPage > 1"
          :text="'1'"
          @change="$emit('change', 1)"
        ></PagiItem>

        <!-- Link đến trang trước -->
        <PagiItem
          v-if="pagi.current_page > 2"
          :text="appliedOptions.previousText"
          @change="$emit('change', pagi.current_page - 1)"
        ></PagiItem>

        <template v-for="i in pages">
          <!-- Hiển thị ô chuyển đến trang nào đó -->
          <li
            v-if="i === pagi.current_page"
            :key="i"
            class="page-item px-1"
          >
            <input
              type="text"
              class="form-control d-inline-block mb-2 mb-md-0 text-center goto-page-input"
              style="width: 50px;"
              placeholder="#"
              :value="pagi.current_page"
              @blur="gotoUserEnterPage()"
              @keydown.enter.prevent="gotoUserEnterPage()"
              @change.stop=""
            />
          </li>

          <!-- Link đến các trang ở tầm giữa -->
          <PagiItem
            v-else
            :key="i"
            :text="formatNumber(i)"
            :className="i === pagi.current_page ? 'active' : ''"
            @change="if (i !== pagi.current_page) { $emit('change', i); }"
          ></PagiItem>
        </template>

        <!-- Link đến trang tiếp theo -->
        <PagiItem
          v-if="pagi.current_page < pagi.last_page - 1"
          :text="appliedOptions.nextText"
          @change="$emit('change', pagi.current_page + 1)"
        ></PagiItem>

        <!-- Link đến trang cuối cùng -->
        <PagiItem
          v-if="pagi.current_page < pagi.last_page - 1
          && endPage < pagi.last_page"
          :text="formatThousands(pagi.last_page)"
          @change="$emit('change', pagi.last_page)"
        ></PagiItem>
      </ul>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import PagiItem from './PagiItem.vue'

defineProps({
  // Tùy chọn người dùng cấu hình
  options: {
    type: Object,
    default: {},
  },

  pagi: {
    type: Object,
    default: {},
    // Số bản ghi mỗi trang
    // per_page: 10,
    // Index bắt đầu, tiện khi hiển thị số thứ tự phân trang
    // from: 1,
    // Tổng số bản ghi
    // total: 0,
    // Trang hiện tại, bắt đầu từ 1
    // current_page: 1,
    // Tổng số trang
    // last_page: 0,
  },
})

const defaultOptions = {
  previousText: '<i class="la la-angle-left"></i>', // &laquo; &lt;
  nextText: '<i class="la la-angle-right"></i>', // &raquo; &gt;
  showNoRecordText: true,
  noRecordText: 'Không có dữ liệu phù hợp',
}

// Tùy chọn được áp dụng
const appliedOptions = ref(Object.assign(defaultOptions, options))

// Trang đầu tiên
const startPage = ref(1)

// Trang cuối cùng
const endPage = ref(1)

// Danh sách các trang hiển thị
const pages = ref([])

// Đã khởi tạo xong
const isInit = ref(false)
</script>
