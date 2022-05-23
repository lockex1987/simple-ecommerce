import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  public static table = 'user'

  @column({ isPrimary: true })
  public id: number

  @column()
  public userName: string

  @column({ serializeAs: null })
  public password: string
}
