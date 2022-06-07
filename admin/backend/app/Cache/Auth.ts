import Redis from '@ioc:Adonis/Addons/Redis'
import { string } from '@ioc:Adonis/Core/Helpers'
import { RequestContract } from '@ioc:Adonis/Core/Request'
import { v4 as uuid } from 'uuid'

// Redis info
export type RedisUser = {
  id: number
  userName: string
}

/**
 * Lấy giá trị token từ request (trong header).
 */
const getToken = (request: RequestContract): string => {
  const token = (request.header('Authorization') ?? '').replace('Bearer ', '')
  return token
}

/**
 * Lấy ra Redis key để lưu token.
 */
const getRedisKeyFromToken = (token: string, request: RequestContract): string => {
  // Thêm IP của người dùng để nếu lỡ bị lộ thông tin token thì cũng không thực hiện được ở máy khác
  const ip = request.ip()
  return 'ecommerce_token:' + token + '-' + ip
}

/**
 * Lấy Redis key từ request hiện tại.
 */
const getRedisKeyFromRequest = (request: RequestContract): string => {
  const token = getToken(request)
  const redisKey = getRedisKeyFromToken(token, request)
  return redisKey
}

/**
 * Sinh token ngẫu nhiên.
 */
const generateRandomToken = (): string => {
  const token = uuid() + string.generateRandom(100)
  return token
}

/**
 * Loại bỏ thông tin người dùng khỏi Redis.
 * Sử dụng khi đăng xuất.
 */
const removeUser = (request: RequestContract) => {
  const redisKey = getRedisKeyFromRequest(request)
  Redis.del(redisKey)
}

/**
 * Lấy thông tin người dùng hiện tại (đang được lưu ở Redis).
 */
const getUser = async (request: RequestContract): Promise<RedisUser|null> => {
  const redisKey = getRedisKeyFromRequest(request)
  const redisValue = await Redis.get(redisKey)
  const user = !redisValue ? null : JSON.parse(redisValue)
  return user
}

/**
 * Lưu thông tin người dùng vào Redis (id, userName).
 * Sử dụng sau khi đăng nhập thành công.
 */
const saveUser = (user: RedisUser, request: RequestContract): string => {
  const token = generateRandomToken()

  // Sinh code và lưu ở Redis trong 10 ngày
  // TODO: Use moment, set end of day
  const expiredTime = 10 * 24 * 60 * 60
  const redisKey = getRedisKeyFromToken(token, request)
  const redisValue = JSON.stringify({
    id: user.id,
    userName: user.userName,
    expiredTime: expiredTime,
  })
  Redis.set(redisKey, redisValue, 'EX', expiredTime)

  return token
}

export {
  saveUser,
  getUser,
  removeUser,
}
