<template>
  <!-- 左侧静态图标 -->
  <el-icon @click="changeIcon" style="margin-right: 10px">
    <!-- Fold和Expand是折叠图标的名称 -->
    <component :is="layOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <!-- 左侧面包屑 -->
  <!-- ArrowRight是icon图标 -->
  <el-breadcrumb :separator-icon="ArrowRight">
    <!-- 面包动态展示路由名字与标题 -->
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { useLayOutSettingStore } from '@/store/modules/setting'
let layOutSettingStore = useLayOutSettingStore()
let $route = useRoute()

const changeIcon = () => {
  console.log('@@', layOutSettingStore.fold)

  layOutSettingStore.fold = !layOutSettingStore.fold
}
</script>

<style scoped></style>
