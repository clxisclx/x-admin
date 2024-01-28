﻿// 用户登录接口携带参数
export interface loginFormData {
  username: string
  password: string
}

// 全部接口返回数据都拥有ts类型
export interface ResponseData {
  code: number
  message: string
}

import type { UserState } from '@/store/modules/types/type'
// 定义登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: UserState
}

// 定义获取用户信息返回数据类型
export interface userInfoResponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
