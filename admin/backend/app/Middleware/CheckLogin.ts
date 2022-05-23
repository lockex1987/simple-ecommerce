import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getUser } from 'App/Cache/Auth'

export default class CheckLogin {
  /**
   * Danh sách các đường dẫn không kiểm tra.
   * Có ký tự / ở đầu.
   */
  private exceptPaths: string[] = [
    '/login',
    '/logout',
    '/me',
  ]

  public async handle(
    { request, response }: HttpContextContract,
    next: () => Promise<void>,
  ) {
    const path = request.url()
    // console.log(path)

    if (this.exceptPaths.includes(path)) {
      await next()
      return
    }

    const redisUser = await getUser(request)
    if (!redisUser) {
      response.unauthorized({ error: 'Must be logged in' })
      return
    }

    await next()
  }
}
