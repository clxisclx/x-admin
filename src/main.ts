import { createApp } from 'vue'
import '@/styles/index.scss'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import gloablComponent from './components/index'
import pinia from './store'
//引入路由
import { router } from './router'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
console.log(import.meta.env)

app.use(gloablComponent)
//安装仓库
app.use(pinia)
//注册模板路由
app.use(router)
app.mount('#app')
