import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

export default class UserController {
  public async search({ request }: HttpContextContract) {
    const { page, limit, search } = request.body()
    const query = User.query()
    if (search) {
      query.whereILike('user_name', '%' + search + '%')
    }
    const pagi = await query.paginate(page, limit)
    return pagi
  }
}
