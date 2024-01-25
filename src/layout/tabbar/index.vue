<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Breadcrump />
    </div>
    <div class="tabbar_right">
      <Setting />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Breadcrump from '@/layout/tabbar/breadcrump/index.vue'
import Setting from '@/layout/tabbar/setting/index.vue'
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>
