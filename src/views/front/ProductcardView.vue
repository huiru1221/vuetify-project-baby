<template>
  <VContainer fluid id="productCardView">
    <VRow>
      <VCol cols="12" md="8">
        <VImg class="pcImg" :src="product.image"></VImg>
      </VCol>
      <VCol cols="12" md="4">
        <VCard style="padding: 50px; box-shadow: none;">
          <p style="color: #665D4A;margin-bottom: 20px;font-size: 20px;font-weight: bold;">{{ product.name }}</p>
          <p style="color: #665D4A;font-size: 20px;margin-bottom: 20px;">NT. {{ product.price }}</p>
          <VBtn type="submit" color="secondary" mb-2 width="100%" height="50px" style="font-size: 18px;">ADD CART</VBtn>
          <VForm :disabled="isSubmitting" @submit.prevent="submit">
            <!-- <VTextField
              v-model.number="quantity.value.value"
              type="number"
              label="數量"
              min="0"
              :error-messages="quantity.errorMessage.value"
            ></VTextField> -->
          </VForm>
          <v-expansion-panels style="margin-top: 29px;">
            <v-expansion-panel
              title="送貨方式"
              >
              <v-expansion-panel-text>
                711取貨付款<br>全家取貨付款<br>萊爾富取貨付款
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel
              title="購買須知"
              >
              <v-expansion-panel-text>
                * 使用過的商品即稱為二手商城物品。物品的折舊程度與個人認知有所差距，故無法以此要求退換貨；購買前請詳細確認過二手商城物品的現況以避免爭議，造成不便，請見諒。
                <br>
                <br>
                * 二手商城物品價格均由託售人訂定。
                <br>
                <br>
                * 託售物品同時於實體門市和網站上曝光銷售，如同時多位購買人欲購買該物品，則以先結帳付款者優先，本站有權取消後面付款的訂單。
                <br>
                <br>
                * 本公司門市或網站代銷之二手商城商品現貨於定點提供購買人參考現況，如購買人於網站下單，即表示已確認無誤；故下單後本公司即無法接受退換貨，也無7天鑑賞期服務，不適用消保法第十九條之規範。
                <br>
                <br>
                * 訂單成立後應於七天內完成交易，逾時即自動放棄購買。
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <pre style="margin-top: 29px;">{{ product.description }}</pre>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
  <VOverlay
    :model-value="!product.sell" persistent
    class="align-center text-center justify-center"
  >
    <h1 class="text-red">已下架</h1>
    <VBtn to="/">回上頁</VBtn>
  </VOverlay>
</template>

<script setup>
import { ref } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import { useRoute } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useUserStore } from '@/store/user'

const route = useRoute()
const createSnackbar = useSnackbar()
const user = useUserStore()

const schema = yup.object({
  quantity: yup.number().typeError('缺少數量').required('缺少數量').min(1, '最少為 1')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 0
  }
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await apiAuth.post('/users/cart', {
      product: product.value._id,
      quantity: values.quantity
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
})

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
});

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.image = data.result.image
    product.value.sell = data.result.sell
    product.value.category = data.result.category

    document.title = 'Mombaby | ' + product.value.name
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
