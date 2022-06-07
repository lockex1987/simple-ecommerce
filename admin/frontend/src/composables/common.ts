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
 * @param {function} fn Hàm nghiệp vụ
 * @param {number} ms Millisecond
 */
export const debounce = <A = unknown, R = void>(
  fn: (args: A) => R,
  ms: number,
) => {
  let inDebounce: NodeJS.Timeout

  return function () {
    const context = this
    const args = arguments

    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => {
      fn.apply(context, args)
    }, ms)
  }
}
