/**
 * Thiết lập cookie.
 * @param {string} cname Tên cookie
 * @param {string} cvalue Giá trị của cookie
 * @param {int} expiredTime Thời điểm hết hạn của token (đơn vị millisecond)
 * @param {string} domain Domain của cookie (thiết lập domain là domain chính để share cookie giữa các sub-domain)
 */
export const setCookie = (cname: string, cvalue: string, expiredTime: number, domain: string | null, secure: boolean | null) => {
  const date = new Date()
  date.setTime(expiredTime)
  const cookie = cname + '=' + encodeURIComponent(cvalue)
    + ';expires=' + date.toUTCString()
    + ';path=/'
    + (domain ? ';domain=' + domain : '')
    + (secure ? ';secure' : '')
  document.cookie = cookie
}

/**
 * Lấy giá trị cookie.
 * @param {string} cname Tên cookie
 * @returns {string} Giá trị của cookie
 */
export const getCookie = (cname: string): string => {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim()
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

/**
 * Xóa cookie.
 * @param {string} cname Tên cookie
 * @param {string} domain Domain của cookie (thiết lập domain là domain chính để share cookie giữa các sub-domain)
 */
export const deleteCookie = (cname: string, domain: string | null) => {
  // Thiết lập giá trị rỗng
  // với thời hạn là một ngày trong quá khứ
  document.cookie = cname + '='
    + ';expires=Thu, 01 Jan 1970 00:00:00 UTC'
    + ';path=/'
    + (domain ? ';domain=' + domain : '')
}
