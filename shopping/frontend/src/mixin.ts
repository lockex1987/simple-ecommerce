const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default {
  methods: {
    toCurrency: (value: number) => formatter.format(value),
  },
}
