import type {
  LoginForm,
  LoginResponseData,
  UserResponseData,
} from '@/api/user/type'
import request from '@/utils/request'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: LoginForm) =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () =>
  request.get<any, UserResponseData>(API.USERINFO_URL)
