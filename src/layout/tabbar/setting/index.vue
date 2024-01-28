<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>

  <el-popover placement="bottom" title="主题设置" :width="300" trigger="hover">
    <el-form>
      <el-form-item label="主题颜色">
        <el-color-picker
          @change="setColor"
          v-model="color"
          size="small"
          show-alpha
          :predefine="predefineColors"
        />
      </el-form-item>
      <el-form-item label="暗黑模式">
        <el-switch
          @change="changeDark"
          v-model="dark"
          style="margin-left: 20px"
          inline-prompt
          active-icon="MoonNight"
          inactive-icon="Sunny"
        />
      </el-form-item>
    </el-form>
    <template #reference>
      <el-button size="small" icon="Setting" circle />
    </template>
  </el-popover>
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
  />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { useLayOutSettingStore } from '@/store/modules/setting'

let layOutSettingStore = useLayOutSettingStore()
let userStore = useUserStore()
let $router = useRouter()
let $route = useRoute()

// 模式
let dark = ref<boolean>(false)
// 刷新按钮回调
const updateRefresh = () => {
  layOutSettingStore.refsh = !layOutSettingStore.refsh
}
// 全屏按钮点击回调
const fullScreen = () => {
  // DOM对象的一个属性：可以用来判断当前是不是全屏模式，true:全屏
  let full = document.fullscreenElement
  // 切换
  if (!full) {
    // 切换为全屏
    document.documentElement.requestFullscreen()
  } else {
    // 切换为非全屏
    document.exitFullscreen()
  }
}

// 退出登录的回调
const logout = async () => {
  // 1.请求退出接口
  // 2.清空token等信息
  await userStore.userLogout()
  // 3.跳转到登录页
  $router.push({ path: '/login', query: { redirect: $route.path } })
}

//颜色组件组件的数据
const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

// 暗黑模式切换
const changeDark = () => {
  // 获取HTML根节点
  let html = document.documentElement
  // 判断HTML标签是否有类名dark
  dark.value ? (html.className = 'dark') : (html.className = '')
}

// 主题颜色的设置
const setColor = () => {
  const html = document.documentElement
  html.style.setProperty('--el-color-primary', color.value)
}
</script>

<style scoped></style>
