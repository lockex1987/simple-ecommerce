import axios, { type AxiosRequestConfig } from 'axios'
import { getToken, deleteToken } from '@/helpers/sso'
import { ElNotification } from 'element-plus'

const ROOT_API = 'http://127.0.0.1:3333'
axios.defaults.baseURL = ROOT_API

// Request interceptor
axios.interceptors.request.use((request: AxiosRequestConfig): AxiosRequestConfig => {
  const token = getToken()
  if (token) {
    if (!request.headers) {
      request.headers = {}
    }
    request.headers.Authorization = token
  }
  return request
})

// Response interceptor
axios.interceptors.response.use(
  // Khi thành công thì trả về response luôn
  response => response,

  // Khi có lỗi thì xử lý lỗi chung
  error => {
    const { status } = error.response

    if (status >= 500) {
      ElNotification({
        type: 'error',
        message: 'Đã có lỗi xảy ra',
      })
    }

    if (status == 403) {
      ElNotification({
        type: 'error',
        message: 'Bạn không có quyền thực hiện chức năng này',
      })
    }

    // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    // Session đã hết hạn, CSRF token không hợp lệ, chưa đăng nhập
    // Token không hợp lệ, hết hạn
    // Chưa được phân quyền
    if ([440, 419, 401].includes(status)) {
      // Xóa token cũ đã hết hạn
      deleteToken()

      // Về trang chủ
      window.location.href = '/'
    }

    // Xử lý lỗi validate do Laravel trả về
    if (status == 422) {
      const errors = error.response.data.errors
      let message = ''
      for (const key in errors) {
        if (Object.prototype.hasOwnProperty.call(errors, key)) {
          const arr = errors[key] as string[]
          arr.forEach(s => {
            message += s + '\n'
          })
        }
      }
      ElNotification({
        type: 'error',
        message: message.trim(),
      })
    }

    // return Promise.reject(error)
    return Promise.resolve({
      data: {
        code: status,
      },
    })
  },
)
