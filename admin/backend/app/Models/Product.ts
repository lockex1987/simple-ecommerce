import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  public static table = 'product'

  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public price: number

  @column()
  public description: string

  @column()
  public image: string
}
