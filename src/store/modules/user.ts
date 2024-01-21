import { defineStore } from 'pinia'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/router/routes'
import { loginResponseData, type loginFormData } from '@/api/user/type'
import { reqLogin } from '@/api/user'
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
        return Promise.reject(new Error(result.data))
      }
    },
  },
})
