import { router } from '@/router'
// @ts-ignore
import nprogress from 'nprogress'
// 进度条样式
import 'nprogress/nprogress.css'
import { useUserStore } from './store/modules/user'
import settings from './settings'
import pinia from './store'
const userStore = useUserStore(pinia)

router.beforeEach(async (to: any, from: any, next: any) => {
  nprogress.start()
  const token = userStore.token
  const username = userStore.username
  console.log('username:', username)
  console.log('token:', token)
  console.log('path:', to.path)

  // 用户登录判断
  if (token) {
    // 登录成功，访问login,不能访问，指向首页
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      // 登录成功访问其余路由
      if (username) {
        next()
      } else {
        // 如果没有用户信息则去获取
        try {
          await userStore.userInfo()
          console.log('----to:', to)

          next({ ...to })
        } catch (error) {
          console.log('111', error)

          //token过期:获取不到用户信息了
          //用户手动修改本地存储token
          //退出登录->用户相关的数据清空
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    // 用户未登录
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

router.afterEach((to: any, from: any) => {
  document.title = `${settings.title} - ${to.meta.title}`
  nprogress.done()
})
