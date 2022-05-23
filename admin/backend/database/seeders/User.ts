import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const plainPassword = '123456aA@'
    const hashedPassword = await Hash.make(plainPassword)
    // console.log(hashedPassword)
    // hashedPassword has '$bcrypt' at the beginning

    const user = new User()
    user.userName = 'lockex1987'
    user.password = hashedPassword
    await user.save()
  }
}
