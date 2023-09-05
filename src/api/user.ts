import request from '@/utils/request.ts'

enum API {

  LOGIN_URL = '/admin/acl/index/login',

  USERINFO_URL = '/admin/acl/index/info',

  LOGOUT_URL = '/admin/acl/index/logout',

}
//登录接口
export const reqLogin = (data: any) =>
  request.post<any, any>(API.LOGIN_URL, data)
//获取用户信息

export const reqUserInfo = () =>

  request.get<any, any>(API.USERINFO_URL)