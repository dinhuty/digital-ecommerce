<template>
  <div class="default-layout">
    <Header></Header>
    <div class="app-main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Container from "@/components/base/Container.vue";
import Header from "@/components/base/Header.vue"
import Footer from "@/components/base/Footer.vue";
</script>

<style lang="scss">
.default-layout{
  .app-main{
    min-height: calc(100vh - calc(80px + 354.8px));
  }
}
</style>