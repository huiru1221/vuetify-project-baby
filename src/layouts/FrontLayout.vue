<template>
  <v-app-bar
    color="primary"
    id="appBar">
    <v-container
      fluid
      class="d-flex align-center text-white appBarContainer"
      style="position: relative;">
      <v-app-bar-title
        class="appBarTitle">
        <v-btn
          to="/"
          class="appBarTitleBtn"
          :width="200"
          :active="false">
          <v-img
            class="appBarImg"
            :width="170"
            src="https://i.imgur.com/HEn5VLx.png"></v-img>
          </v-btn>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="appBarNavIcon text-h5"
        variant="tonal"
        @click="active = !active"
        style="position: absolute; top: 63%; right: 3%;"
        v-if="isMobile"></v-app-bar-nav-icon>
      <template v-if="!isMobile">
        <template
          v-for="navItem in navItems"
          :key="navItem.to">
          <v-btn
            class="navIconBtn mx-5 mt-16 text-h7"
            :variant="navItem.variant"
            :prepend-icon="navItem.icon"
            :to="navItem.to"
            style="position: relative;"
            v-if="navItem.show"
            :active="false"
            :width="70">{{ navItem.text }}
            <v-badge
              class="vbadge"
              color="success"
              :content="cart?.toString() || 0"
              style="position: absolute; top: 20%; left: 100%;"
              v-if="navItem.to === '/cart'"></v-badge>
          </v-btn>
        </template>
      </template>
      <v-btn
        class="logBtn mt-16 me-13"
        v-if="isLogin"
        variant="flat"
        prepend-icon="mdi-logout"
        rounded="xl"
        @click="logout">登出</v-btn>
      <v-btn
        class="logBtn mt-16"
        v-if="!isLogin"
        variant="flat"
        prepend-icon="mdi-login"
        rounded="xl"
        @click="login">登入</v-btn>
    </v-container>
  </v-app-bar>

  <v-bottom-navigation
    :active="active"
    bg-color="primary"
    color="secondary"
    v-if="isMobile">
    <template
      v-for="navItem in navItemsTwo"
      :key="navItem.to">
      <v-btn
        class="text-white"
        v-if="navItem.show"
        :prepend-icon="navItem.icon"
        :to="navItem.to">{{ navItem.text }}
        <v-badge
              class="vbadge"
              color="success"
              :content="cart?.toString() || 0"
              style="position: absolute; top: 20%; left: 80%;"
              v-if="navItem.to === '/cart'"></v-badge>
      </v-btn>
    </template>
  </v-bottom-navigation>
  <v-img
    data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1000"
    id="followUs"
    src="https://i.imgur.com/Rv4iTZH.png"
  ></v-img>
  <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=906dydrs">
    <v-img
      id="goLine"
      src="https://i.imgur.com/gUdbHrY.png"
    ></v-img>
  </a>
  <v-img
    id="goTop"
    src="https://i.imgur.com/K6X2uuR.png"
    @click="scrollToTop"
  ></v-img>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)
const active = ref(true)

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const navItems = computed(() => {
  return [
    { to: '/', text: 'HOME', icon: 'mdi-home', variant: 'text', show: isLogin },
    { to: '/product', text: 'SHOP', icon: 'mdi-leaf-circle', variant: 'text', show: isLogin },
    { to: '/cart', text: 'CART', icon: 'mdi-shopping-outline', show: isLogin },
    { to: '/orders', text: 'ODERS', icon: 'mdi-star-shooting', variant: 'text', show: isLogin },
    { to: '/admin', text: 'MANAGE', icon: 'mdi-cog', variant: 'text', show: isLogin.value && isAdmin.value }
  ]
})

const navItemsTwo = computed(() => {
  return [
    { to: '/', text: 'HOME', icon: 'mdi-home', variant: 'text', show: isLogin },
    { to: '/product', text: 'SHOP', icon: 'mdi-leaf-circle', variant: 'text', show: isLogin },
    { to: '/cart', text: 'CART', icon: 'mdi-shopping-outline', show: isLogin },
    { to: '/orders', text: 'ODERS', icon: 'mdi-star-shooting', variant: 'text', show: isLogin },
    { to: '/admin', text: 'MANAGE', icon: 'mdi-cog', variant: 'text', show: isLogin.value && isAdmin.value }
  ]
})

const loginUrl = import.meta.env.VITE_API + '/users/line'

const login = () => {
  location.href = loginUrl
}

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackerbarProps: {
        timeout: 2000,
        color: 'secondary',
        location: 'bottom'
      }
    })
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackerbarProps: {
        timeout: 2000,
        color: '',
        location: 'bottom'
      }
    })
  }
}

</script>

<style scoped>
#goTop {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 55px;
  right: 10px;
  z-index: 99999;
  cursor: pointer;
}
#goLine {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 110px;
  right: 10px;
  z-index: 99999;
  cursor: pointer;
}
#followUs {
  width: 100px;
  height: 50px;
  position: fixed;
  bottom: 150px;
  right: 10px;
  z-index: 99999;
  cursor: pointer;
  transform: rotate(-10deg);
}

</style>
