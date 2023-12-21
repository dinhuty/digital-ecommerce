<template>
  <div class="app-mobile-list tw-flex tw-flex-col tw-gap-5">
    <BreadScrumb />
    <Container class="main">
      Hello mobile
    </Container>

  </div>
</template>
  
<script lang="ts" setup>
import Container from "@/components/base/Container.vue";
import BreadScrumb from "@/components/base/BreadScrumb.vue";
</script>
  
<style lang="scss">
.app-product-detail {}
</style>