<template>
  <div class="layout-main">
    <div class="layout-header" data-tauri-drag-region>
      <div class="logo">
        <img :src="Logo" class="logo-img" data-tauri-drag-region />
      </div>
      <div class="header-action">
        <div class="titlebar-button" id="titlebar-minimize">
          <el-icon>
            <Minus />
          </el-icon>
        </div>
        <div class="titlebar-button" id="titlebar-maximize">
          <el-icon>
            <FullScreen />
          </el-icon>
        </div>
        <div class="titlebar-button" id="titlebar-close">
          <el-icon>
            <Close />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="main-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';
import { appWindow } from '@tauri-apps/api/window'
import Logo from "@/assets/images/logo.png"

onMounted(() => {
  document.getElementById('titlebar-minimize')!.addEventListener('click', () => appWindow.minimize())
  document.getElementById('titlebar-maximize')!.addEventListener('click', () => appWindow.toggleMaximize())
  document.getElementById('titlebar-close')!.addEventListener('click', () => appWindow.close())
  console.log("onMounted------", document.getElementById('titlebar-close'));
})


</script>

<style scoped lang='scss'>
.layout-main {
  height: 100%;

  .logo {
    display: flex;
    align-items: center;

    .logo-img {
      width: 130px;
      height: 46px;
    }
  }

  .layout-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding-right: 10px;
    border-bottom: 1px solid #eee;

    .header-action {
      height: 56px;
      display: flex;
      align-items: center;

      .titlebar-button {
        margin-left: 15px !important;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        color: var(--el-button-text-color);

        &:hover {
          background-color: var(--el-fill-color-light) !important;
        }
      }

      #titlebar-close {
        &:hover {
          color: white;
          background-color: rgb(235, 32, 19) !important;
        }
      }
    }
  }

  .main-box {
    height: calc(100% - 56px);
  }
}
</style>