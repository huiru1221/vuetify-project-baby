import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import UserRole from '@/enums/UserRole'
import { apiAuth } from '@/plugins/axios'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const username = ref('')
  const picture = ref('')
  const cart = ref(0)
  const role = ref(UserRole.USER)

  const login = (data) => {
    cart.value = data.cart
    role.value = data.role
    token.value = data
  }

  const isLogin = computed(() => {
    return token.value.length > 0
  })

  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  // const avatar = computed(() => {
  //   return `https://source.boringavatars.com/beam/120/${account.value}?colors=0db2ac,f5dd7e,fc8d4d,fc694d,faba32`
  // })

  const getProfile = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      username.value = data.result.username
      picture.value = data.result.picture
      cart.value = data.result.cart
      role.value = data.result.role
    } catch (error) {
      token.value = ''
    }
  }

  const logout = () => {
    token.value = ''
    username.value = ''
    picture.value = ''
    cart.value = 0
    role.value = UserRole.USER
  }

  return {
    token,
    username,
    picture,
    cart,
    role,
    login,
    isLogin,
    isAdmin,
    // avatar,
    getProfile,
    logout
  }
}, {
  persist: {
    key: 'Mombaby',
    paths: ['token']
  }
})
