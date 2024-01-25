<template>
  <div class="logo" v-if="settings.logoHidden">
    <img :src="settings.logo" alt="" />
    <p>{{ settings.title }}</p>
  </div>
</template>

<script lang="ts" setup>
import settings from '@/settings'
</script>

<script lang="ts">
export default {
  name: 'Logo',
}
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 5px;
  }
}
</style>
