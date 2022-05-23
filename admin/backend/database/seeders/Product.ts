import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'
import axios from 'axios'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    const options = {
      proxy: {
        protocol: 'http',
        host: '192.168.103.26',
        port: 80,
      },
    }
    const { data } = await axios.get('https://fakestoreapi.com/products', options)
    console.log(data)

    const productList = data.map(e => ({
      title: e.title,
      description: e.description,
      price: e.price,
      image: e.image,
    }))
    await Product.createMany(productList)
  }
}
