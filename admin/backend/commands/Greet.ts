import { BaseCommand } from '@adonisjs/core/build/standalone'
// import User from 'App/Models/User' // does not work

export default class Greet extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'greet'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = ''

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    // this.logger.info('Hello world!')
    const { default: User } = await import('App/Models/User')

    /*
    await User.create({
      id: 2,
      userName: 'XXX',
      password: 'YYYY',
    })
    */

    const user = new User()
    user.userName = 'virk'
    user.password = 'virk@adonisjs.com'
    await user.save()
  }
}
