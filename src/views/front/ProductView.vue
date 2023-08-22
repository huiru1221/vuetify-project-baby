<template>
  <swiper id="productsSwiper"
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <img src="https://i.imgur.com/CzXBowz.png">
    </swiper-slide>
    <swiper-slide>
      <img src="https://i.imgur.com/zvlP3xT.png">
    </swiper-slide>
  </swiper>
    <VContainer>
      <VRow>
        <VCol
          cols="6" md="4" lg="3"
          v-for="product in products"
          :key="product._id"
        >
          <ProductCard class="productsTableCard" v-bind="product"></ProductCard>
        </VCol>
      </VRow>
    </VContainer>
    <!-- footer -->
    <VContainer fluid id="footer2">
      <VRow id="footerbottom">
        <VCol></VCol>
      </VRow>
      <VRow id="footerlogo">
        <VCol>
          <img src="https://i.imgur.com/HEn5VLx.png">
        </VCol>
      </VRow>
      <VRow id="footerinfo" class="justify-center">
        <VCol class="footerimg" cols="6" md="4" lg="1">
          <img src="https://i.imgur.com/WDynz2M.png">
        </VCol>
        <VCol class="footerimg" cols="6" md="4" lg="1">
          <img src="https://i.imgur.com/9hDTRma.png">
        </VCol>
        <VCol class="footerimg" cols="6" md="4" lg="1">
          <img src="https://i.imgur.com/qvvsGXK.png">
        </VCol>
        <VCol class="footerimg" cols="6" md="4" lg="1">
          <img src="https://i.imgur.com/5GmQdQ8.png">
        </VCol>
        <VCol class="footerimg" cols="6" md="4" lg="1">
          <img src="https://i.imgur.com/so4BROK.png">
        </VCol>
        <VCol class="footerimg" cols="6" md="4" lg="1">
          <img src="https://i.imgur.com/2AfmsOo.png">
        </VCol>
      </VRow>
      <VRow id="footercontact">
        <VCol class="contactweek" cols="12">聯絡我們</VCol>
        <VCol class="contactweek" cols="12">週一到週五： 10:00–12:30、13:30–17:00</VCol>
        <VCol class="contactsns" cols="12">
          <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=906dydrs"><img src="https://i.imgur.com/j5Qldq4.png"></a>
          <img src="" alt="">
        </VCol>
      </VRow>
      <VRow id="footerbottom">
        <VCol></VCol>
      </VRow>
      <div id="designer" class="text-white">
        <p>泰山職訓前端網頁專題</p>
        <p>by Hui-Ru Chen</p>
      </div>
    </VContainer>

</template>

<script setup>
import { api } from '@/plugins/axios'
import { ref } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const modules = [Autoplay, Pagination, Navigation]

const createSnackbar = useSnackbar()

const products = ref([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.value.push(...data.result)
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
