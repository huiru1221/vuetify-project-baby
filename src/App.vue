<template lang="pug">
VApp
  RouterView
</template>

<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const route = useRoute()
const router = useRouter()
const user = useUserStore()

const unwatch = watch(() => route.query, async () => {
  if (route.query.token) {
    user.login(route.query.token)
    router.replace({ query: {} })
    await user.getProfile()
  }
  unwatch()
})
</script>
