import { defineStore } from 'pinia'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'
import {
  loginResponseData,
  type loginFormData,
  userInfoResponseData,
} from '@/api/user/type'
import { reqLogin, reqLogout, reqUserInfo } from '@/api/user'
// 用户状态
export const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute, // 存储生成菜单需要数组(路由)
      username: '',
      avatar: '',
      buttons: [], // 存储当前用户是否包含某一个按钮
    }
  },

  actions: {
    // 用户登录的方法
    async userLogin(data: loginFormData) {
      const result: loginResponseData = await reqLogin(data)

      if (result.code == 200) {
        // 登录成功
        this.token = result.data as string
        SET_TOKEN(result.data as string)
        return Promise.resolve('ok')
      } else {
        return Promise.reject(new Error('登录失败'))
      }
    },

    // 退出登录
    async userLogout() {
      const result: any = await reqLogout()
      if (result.code == 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },

    // 获取用户信息
    async userInfo() {
      const result: userInfoResponseData = await reqUserInfo()
      if (result.code == 200) {
        this.username = result.data.username
        this.avatar = result.data.avatar
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
})
