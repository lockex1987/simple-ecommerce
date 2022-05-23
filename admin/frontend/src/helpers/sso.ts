import {
  getCookie,
  setCookie,
  deleteCookie,
} from './cookie'

// Tên cookie
const AUTH_COOKIE_NAME = 'authToken'

/**
 * Lấy root domain.
 * Ví dụ main.platform.vn, ai.platform.vn, darkweb.platform.vn sẽ có cùng root domain là .platform.vn.
 */
const getRootDomain = () => {
  // Nếu host có chứa ký tự (không phải tất cả là số)
  // thì là domain, không phải IP
  // Logic thế cho đơn giản
  // Remove port
  const full = location.host
  const host = full.split(':')[0]

  if (host == 'localhost') {
    return host
  }

  const hasAlphabet = /[a-z]/i.test(host)
  if (!hasAlphabet) {
    // Theo IP
    return host
  }

  // Theo domain
  const temp = host.split('.').reverse()
  if (temp.length > 2) {
    return '.' + temp[1] + '.' + temp[0]
  }

  return '.' + temp[0]
}

/**
 * Lấy giá trị token.
 */
export const getToken = () => {
  return getCookie(AUTH_COOKIE_NAME)
}

/**
 * Lưu token.
 * @param {string} token Giá trị token
 */
export const setToken = (token: string) => {
  const rootDomain = getRootDomain()
  const oneYear = 365 * 24 * 60 * 60 * 1000
  const expiredTime = new Date().getTime() + oneYear
  setCookie(AUTH_COOKIE_NAME, token, expiredTime, rootDomain, false)
}

/**
 * Xóa token.
 */
export const deleteToken = () => {
  const rootDomain = getRootDomain()
  deleteCookie(AUTH_COOKIE_NAME, rootDomain)
}
