<template>
  <VCard height="280">
    <VImg :src="image" cover height="200"></VImg>
    <VCardTitle>
      <RouterLink
        :to="'/products/' + _id"
        class="text-secondary text-decoration-none"
        style="font-weight: bold;"
      >
        {{ name }}
      </RouterLink>
    </VCardTitle>
    <VCardSubtitle class="text-secondary text-h6 " style="position: relative;">NT. {{ price }}</VCardSubtitle>
      <VBtn icon v-bind="props"  color="error" style="position: absolute; bottom: 20%; left: 80%;">
        <VIcon color="white" @click="addCart"> mdi-cart</VIcon>
      </VBtn>
  </VCard>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()
const user = useUserStore()

const props = defineProps({
  _id: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  description: {
    type: String,
    default: () => ''
  },
  image: {
    type: String,
    default: () => ''
  },
  name: {
    type: String,
    default: () => ''
  },
  price: {
    type: Number,
    default: () => 0
  },
  sell: {

    type: Boolean,
    default: () => true
  }
})

const addCart = async () => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product: props._id,
      quantity: 1
    })
    user.cart = data.result
  } catch (error) {
    createSnackbar({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}
</script>
