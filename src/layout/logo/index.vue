<template>
  <div class="logo" v-if="settings.logoHidden">
    <img :src="settings.logo" alt="" />
    <p>{{ settings.title }}</p>
  </div>
</template>

<script lang="ts" setup name="Logo">
import settings from '@/settings'
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 30px;
  }
}
</style>
