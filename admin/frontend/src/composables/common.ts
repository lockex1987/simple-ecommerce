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
