const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const toCurrency = (value: number): string => formatter.format(value)
