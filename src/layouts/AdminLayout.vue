<template>
  <VNavigationDrawer permanent color="primary">
    <VList class="adminAvatar d-flex align-center flex-column">
      <VAvatar size="80">
        <VImg :src="user.picture"></VImg>
      </VAvatar>
      <VListItem :title="username">
      </VListItem>
    </VList>
    <VDivider></VDivider>
    <VList>
      <VListItem
        v-for="navItem in navItems" :key="navItem.to"
        :to="navItem.to" :title="navItem.title" :prepend-icon="navItem.icon"
      ></VListItem>
    </VList>
  </VNavigationDrawer>
  <VMain>
    <RouterView></RouterView>
  </VMain>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'

const user = useUserStore()
const { username, picture } = storeToRefs(user)

const navItems = [
  { to: '/admin/products', title: '商品管理', icon: 'mdi-shopping' },
  { to: '/admin/orders', title: '訂單管理', icon: 'mdi-format-list-numbered' },
  { to: '/', title: '回首頁', icon: 'mdi-home' }
]
</script>
