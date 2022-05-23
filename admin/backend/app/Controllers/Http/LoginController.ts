import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

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

    return {
      code: 0,
      user: {
        id: user.id,
        userName: user.userName,
      },
      token: 'xxx',
    }
  }

  public async logout({ request }: HttpContextContract) {
    const body = request.body()
    console.log(body)
    // return body
    return {
      code: 0,
    }
  }

  public async me({ request }: HttpContextContract) {
    return {
      code: 0,
      user: {
        id: 1,
        userName: 'lockex1987',
      },
    }
  }
}
