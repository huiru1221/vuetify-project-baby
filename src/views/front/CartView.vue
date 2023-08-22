<template>
  <VContainer>
    <VRow>
      <VCard width="100%" style="margin-bottom: 50px;margin-top: 60px;border: #a09375 1px solid;box-shadow: none;padding: 20px;">
        <VCardTitle style="margin-bottom: 20px;font-weight: bold;color: #665D4A; text-align: left;">購物車</VCardTitle>
        <VTable>
          <thead>
            <tr>
              <th style="font-weight: bold;font-size: 20px; color: #a6c9cd;">圖片</th>
              <th style="font-weight: bold;font-size: 20px; color: #a6c9cd;">名稱</th>
              <th style="font-weight: bold;font-size: 20px; color: #a6c9cd;">單價</th>
              <th style="font-weight: bold;font-size: 20px; color: #a6c9cd;">數量</th>
              <th style="font-weight: bold;font-size: 20px; color: #a6c9cd;">小計</th>
              <th style="font-weight: bold;font-size: 20px; color: #a6c9cd;">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item._id" :class="{ 'bg-red-lighten-5': !item.product.sell }">
              <td>
                <VImg :src="item.product.image" cover width="100" aspect-ratio="1"></VImg>
              </td>
              <td>{{ item.product.name }}</td>
              <td>{{ item.product.price }}</td>
              <td>
                <!-- <VBtn color="primary" variant="text" icon="mdi-minus" @click="updateCart(item.product._id, -1)"></VBtn> -->
                {{ item.quantity }}
                <!-- <VBtn color="primary" variant="text" icon="mdi-plus" @click="updateCart(item.product._id, 1)"></VBtn> -->
              </td>
              <td>{{ item.quantity * item.product.price }}</td>
              <td>
                <VBtn color="error" variant="text" icon="mdi-delete" @click="updateCart(item.product._id, item.quantity * -1)"></VBtn>
              </td>
            </tr>
            <tr v-if="cart.length === 0">
              <td colspan="6" class="text-center">沒有商品</td>
            </tr>
          </tbody>
        </VTable>
      </VCard>
      <VCard width="60%" style="margin-right: 58.9px; border: #a09375 1px solid;box-shadow: none;padding: 20px;margin-bottom: 50px">
        <VCardTitle style="margin-bottom: 20px;font-weight: bold;color: #665D4A;">選擇送貨及付款方式</VCardTitle>
        <span>收件人</span>
        <VTextField label="請填真實姓名" :rules="name" hide-details="auto" style=" margin: auto; border: #a09375 1px solid; box-shadow: none;margin-bottom: 20px;"></VTextField>
        <span>電話</span>
        <VTextField label="例如: 0912345678" :rules="phone" hide-details="auto" style=" margin: auto; border: #a09375 1px solid; box-shadow: none;margin-bottom: 20px;"></VTextField>
        <span>電子信箱</span>
        <VTextField label="例如: 123@gmail.com" :rules="email" hide-details="auto" style=" margin: auto; border: #a09375 1px solid; box-shadow: none;margin-bottom: 20px;"></VTextField>
        <span>地址</span>
        <VTextField label="例如: 台北市中山區南京西路14號" :rules="address" hide-details="auto" style=" margin: auto; border: #a09375 1px solid; box-shadow: none;margin-bottom: 20px;"></VTextField>
        <span>付款方式</span>
        <VSelect
            :items="['711取貨付款', '全家取貨付款', '萊爾富取貨付款']"
            :rules="payment"
            style=" margin: auto; border: #a09375 1px solid; box-shadow: none;margin-bottom: 20px;height: 58px;"
          ></VSelect>

      </VCard>
      <VCard width="35%" height="617" style="border: #a09375 1px solid;box-shadow: none;padding: 20px; text-align: center;">
        <VCardTitle style="margin-bottom: 20px;font-weight: bold;color: #665D4A; text-align: left;">訂單資訊</VCardTitle>
        <p class="text-h6" style="margin-bottom: 10px;text-align: right;">運費: 免運</p>
        <p class="text-h6" style="margin-bottom: 10px;text-align: right;">總金額:</p>
        <p class="text-h3" style="margin-bottom: 40px;text-align: right;">NT. {{ total }}</p>
        <div m-auto>加入line官方帳號，可接收訂單資訊
          <VImg cols="6" src="https://i.imgur.com/5y5LKsA.png" width="45%" style="margin: auto; margin-bottom: 20px;"></VImg>
        </div>
        <VBtn color="success" @click="submit" :disabled="!canCheckout" width="300px" height="50px">結帳</VBtn>
      </VCard>
    </VRow>
  </VContainer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { VCardTitle } from 'vuetify/lib/components/index.mjs'

const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const cart = ref([])

const updateCart = async (product, quantity) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product,
      quantity
    })
    const idx = cart.value.findIndex(item => item.product._id === product)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }
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

const total = computed(() => {
  return cart.value.reduce((total, current) => total + (current.quantity * current.product.price), 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const submit = async (req, res) => {
  try {
    await apiAuth.post('/orders', {

    })
    user.cart = 0
    router.push('/orders')
  } catch (error) {
    console.log(error)
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

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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
})()
</script>
