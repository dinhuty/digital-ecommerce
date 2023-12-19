<template>
  <div class="default-layout">
    <Header></Header>
    <Container>
      <router-view></router-view>
    </Container>
  </div>
</template>

<script lang="ts" setup>
import Container from "@/components/base/Container.vue";
import Header from "@components/base/Header.vue";
</script>

<style>
</style>