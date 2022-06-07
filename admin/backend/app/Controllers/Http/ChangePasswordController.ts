import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'
import { getUser, type RedisUser } from 'App/Cache/Auth'

export default class ChangePasswordController {
  public async changePassword({ request }: HttpContextContract) {
    // TODO: Validate
    const { oldPassword, newPassword } = request.body()

    const redisUser = await getUser(request) as RedisUser
    const user = await User.find(redisUser.id)

    if (!user) {
      return {
        code: 1,
        message: 'Not in DB',
      }
    }

    const check = await Hash.verify(user.password, oldPassword)
    if (!check) {
      return {
        code: 1,
        message: 'Old password not matched',
      }
    }

    const hashedPassword = await Hash.make(newPassword)
    user.password = hashedPassword
    await user.save()

    return { code: 0 }
  }
}
