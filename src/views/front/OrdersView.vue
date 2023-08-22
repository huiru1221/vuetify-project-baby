<template>
  <VContainer>
    <VRow>
      <VCard width="100%" style="margin-bottom: 50px;margin-top: 60px;border: #a09375 1px solid;box-shadow: none;padding: 20px;">
        <VCardTitle style="margin-bottom: 20px;font-weight: bold;color: #665D4A; text-align: left;">訂單</VCardTitle>
        <VCol cols="12">
          <VTable >
            <thead>
              <tr>
                <th style="font-weight: bold;font-size: 20px; color: #a6c9cd;">訂單號碼</th>
                <th style="font-weight: bold;font-size: 20px; color: #a6c9cd;">日期</th>
                <th style="font-weight: bold;font-size: 20px; color: #a6c9cd;">金額</th>
                <th style="font-weight: bold;font-size: 20px; color: #a6c9cd;">商品</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order._id" style="height: 100px;">
                <td>{{ order._id }}</td>
                <td>{{ new Date(order.date).toLocaleString() }}</td>
                <td style="color: #e0a497;font-size: 20px;">NT. {{ order.total }}</td>
                <td>
                  <ul>
                    <li v-for="item in order.cart" :key="item._id">
                      {{ item.product.name }} * {{ item.quantity }}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </VTable>
        </VCol>
      </VCard>
    </VRow>
  </VContainer>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'

const createSnackbar = useSnackbar()

const orders = ref([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.value.push(...data.result.map(order => {
      order.total = order.cart.reduce((total, current) => total + (current.product.price * current.quantity), 0)
      return order
    }))
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
