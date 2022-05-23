import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
  public async login({ request }: HttpContextContract) {
    const body = request.body()
    console.log(body)
    // return body
    return {
      code: 0,
      user: {
        id: 1,
        userName: 'lockex1987',
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
