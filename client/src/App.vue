<template>
    <div class="my-app">
      <router-view></router-view>
      <LoadingPage />
    </div>
</template>
  
<script lang="ts" setup>
import LoadingPage from "@components/base/LoadingPage.vue";
</script>

<style scoped lang="scss">
</style>
