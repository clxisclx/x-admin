﻿import { defineStore } from 'pinia'

export const useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, // 控制菜单是否折叠
      refsh: false, // 控制刷新效果
    }
  },
})
