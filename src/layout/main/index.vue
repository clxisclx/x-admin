﻿<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts" setup></script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 0.1s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
