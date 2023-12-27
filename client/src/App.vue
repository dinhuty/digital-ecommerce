<template>
  <div class="my-app">
    <router-view></router-view>
  </div>
</template>
  
<script lang="ts" setup>
import LoadingPage from "@components/base/LoadingPage.vue";
</script>

<style scoped lang="scss">
.my-app {
  background-color: #f4f6f8;
}
</style>
