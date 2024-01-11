<template>
  <Container>
    <div class="app-profile">
      <p>Hello {{ user.username }}</p>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import Container from "@components/base/Container.vue";
import { useAuth } from '@composables/useAuth'

const { user } = useAuth()
console.log(user)
</script>
<route lang="yaml">
  name: Profile
  meta:
    requiresAuth: true
    layout: "default"
</route>
<style lang="scss">
.app-profile {}
</style>