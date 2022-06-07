const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const toCurrency = (value: number) => formatter.format(value)

/**
 * Hiển thị số có ngăn cách hàng nghìn.
 * @param {number} num Số
 * @retrn {string}
 */
export const formatNumber = (num: number | null): string => {
  if (!num) {
    return ''
  }
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

/**
 * Không thực hiện hàm luôn khi người dùng đang thao tác,
 * mà chờ sau khi người dùng đã thực hiện xong một khoảng thời gian nào đó.
 * @param {Function} fn Hàm nghiệp vụ
 * @param {number} ms Millisecond
 */
export const debounce = <F extends (...args: any) => any>(
  // fn: Function,
  fn: F,
  ms: number,
) => {
  let timeoutId: NodeJS.Timeout

  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn(...args)
    }, ms)
  }
}
