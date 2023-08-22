/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/settings.scss'

// Composables
import { createVuetify } from 'vuetify'

// Components
import { VDataTableServer } from 'vuetify/labs/VDataTable'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import { zhHant } from 'vuetify/locale'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDataTableServer,
    VDatePicker,
    Swiper,
    SwiperSlide
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#DAC8A0',
          secondary: '#665D4A',
          accent: '#a6c9cd',
          error: '#e0a497',
          info: '#a09375',
          success: '#b2c3b7'
        }
      }
    }
  },
  locale: {
    locale: 'zhHant',
    messages: { zhHant }
  }
})
