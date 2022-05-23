import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'
import {
  saveUser,
  getUser,
  removeUser,
} from 'App/Cache/Auth'

export default class LoginController {
  public async login({ request }: HttpContextContract) {
    const { userName, password } = request.body()

    const user = await User.findBy('userName', userName)
    if (!user) {
      return {
        code: 1,
        message: 'User not found',
      }
    }

    const check = await Hash.verify(user.password, password)
    if (!check) {
      return {
        code: 1,
        message: 'Password not matched',
      }
    }

    const redisUser = {
      id: user.id,
      userName: user.userName,
    }
    const token = saveUser(redisUser, request)

    return {
      code: 0,
      user: redisUser,
      token,
    }
  }

  public async logout({ request }: HttpContextContract) {
    removeUser(request)
    return {
      code: 0,
      message: 'Logout',
    }
  }

  public async me({ request }: HttpContextContract) {
    const redisUser = await getUser(request)
    if (!redisUser) {
      return {
        code: 1,
        message: 'Not in Redis',
      }
    }

    const user = await User.find(redisUser.id)
    if (!user) {
      return {
        code: 1,
        message: 'Not in DB',
      }
    }

    return {
      code: 0,
      user: redisUser,
    }
  }
}
