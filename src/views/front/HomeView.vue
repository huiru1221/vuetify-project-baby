<template>
  <!-- section1 -->
    <div id="home">
      <div id="homeLogo" class="d-flex">
        <div class="homeTitle"><img src="https://i.imgur.com/65LPm4r.png"></div>
        <div class="homeTitle"><img src="https://i.imgur.com/0pdI6md.png"></div>
        <div class="homeTitle"><img src="https://i.imgur.com/F3SovzC.png"></div>
        <div class="homeTitle"><img src="https://i.imgur.com/M7MDdk8.png"></div>
        <div class="homeTitle"><img src="https://i.imgur.com/AHpQljc.png"></div>
        <div class="homeTitle"><img src="https://i.imgur.com/rwQZop6.png"></div>
        <div class="homeTitle"><img src="https://i.imgur.com/BkXIUsj.png"></div>
        <div class="homeTitle"><img src="https://i.imgur.com/JDtwSgz.png"></div>
      </div>
    </div>
  <!-- section2 -->
    <VRow id="advertise">
      <VCol class="advertise">
          <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="3"
          :loop="true"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="true"
          :modules="modules"
          >
            <swiper-slide>
              <img src="https://i.imgur.com/8glreJA.jpg"/>
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/6IBtN6S.jpg"/>
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/tb2BIVJ.jpg"/>
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/qwbuuYu.jpg"/>
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/qOvDufN.jpg"/>
            </swiper-slide>
          </swiper>
      </VCol>
      <!-- <VCol v-else>
        <swiper
          :direction="'vertical'"
          :slidesPerView="1"
          :spaceBetween="30"
          :mousewheel="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper">
          <swiper-slide>
              <img src="https://i.imgur.com/8glreJA.jpg"/>
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/6IBtN6S.jpg"/>
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/tb2BIVJ.jpg"/>
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/qwbuuYu.jpg"/>
            </swiper-slide>
            <swiper-slide>
              <img src="https://i.imgur.com/qOvDufN.jpg"/>
            </swiper-slide>
        </swiper>
      </VCol> -->
    </VRow>

    <!-- section3 -->
    <v-parallax
      id="parallax"
      src="https://i.imgur.com/xgb6LKR.jpg"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h1 font-weight-bold font-weight-thin parallaxtext">
          本月精選
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </div>
    </v-parallax>
    <VRow>
      <VCol>
        <swiper :watchSlidesProgress="true" :slidesPerView="3" class="myHomeSwiper">
          <swiper-slide
          v-for="product in products"
          :key="product._id">
            <ProductCard class="homeProductCard" v-bind="product"></ProductCard>
          </swiper-slide>
        </swiper>
      </VCol>
    </VRow>
  <!-- section4 -->
    <VRow id="homeinfo">
      <VCol class="info">
        <div>
          <img class="infoimg1" src="https://i.imgur.com/ADlJJcL.png">
          <img class="infoimg2" src="https://i.imgur.com/mG4yBa7.png">
          <div class="infotext">
            <h1>愛的環保，守護下一代</h1>
            <br>
            <p>在這個少子化且物價通膨快速的年代，大量採購新的育嬰用品不僅浪費錢財也不環保，許多家庭養育小孩長大會留下很多無法再使用的育嬰用品，我們希望能透過這樣的交易平台，使這些東西能夠有新的利用價值之外，也能做環保，為地球盡一份力。</p>
          </div>
        </div>
      </VCol>
    </VRow>

    <!-- footer -->
    <VContainer fluid id="footer">
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
import { ref, onMounted } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules'
import ProductCard from '@/components/ProductCard.vue'
// import { useDisplay } from 'vuetify'

gsap.registerPlugin(ScrollTrigger)

const modules = [EffectCoverflow, Pagination, Mousewheel]

const createSnackbar = useSnackbar()
// const { lg } = useDisplay()

const products = ref([])
onMounted(() => {
  console.log(gsap)
  gsap.set('.homeTitle', {
    marginLeft: '5px'
  })
  gsap.from('.homeTitle', {
    y: -500,
    stagger: 0.2
  })
})
;(async () => {
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
