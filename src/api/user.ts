// import { http } from '@/utils/http'

export interface ResponseData<T> {
  code: number
  data: T
  msg: string
}
/**
 * @description 登录
 */
export function login(_params: Record<string, any>) {
  //   return http({
  //     url: '/user/login',
  //     method: 'post',
  //     data: _params,
  //   })
  return new Promise<ResponseData<{ token: string }>>((resolve) => {
    resolve({
      data: {
        token: 'token',
      },
      code: 200,
      msg: 'success',
    })
  })
}

/**
 * @description 获取用户信息
 */
export function getUserInfo() {
  //   return http({
  //     url: '/user/info',
  //     method: 'get',
  //   })
  return new Promise<ResponseData<{ userInfo: { username: string, avatar: string } }>>((resolve) => {
    resolve({
      data: {
        userInfo: {
          username: 'admin',
          avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      },
      code: 200,
      msg: 'success',
    })
  })
}
