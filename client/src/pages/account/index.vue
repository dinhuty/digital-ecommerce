<template>
  <div class="account-profile">
    Test
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from '@composables/useAuth'

const { user } = useAuth()
console.log(user)
</script>
<route lang="yaml">
  name: Thông tin cá nhân
  meta:
    requiresAuth: true
    layout: "accountLayout"
</route>
<style lang="scss"></style>