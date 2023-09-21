// Necessaries
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vue3Toastify from 'vue3-toastify'

// API
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle'

// Else
import './assets/scss/style.css'
import 'vue-global-api'
import 'remixicon/fonts/remixicon.css'
import 'vue3-toastify/dist/index.css'

// Initializing
const pinia = createPinia()
const app = createApp(App)

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas  } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* 원하는 아이콘을 개별적으로 import */
import { faBullhorn, faCircleExclamation, faCheck, faBell, faChevronLeft, faChevronRight, faPen, faUser, faCircleUser, faAnglesRight, faAnglesLeft, faBarsProgress, faFloppyDisk, faCircleXmark, faQuoteLeft, faQuoteRight, faCommentDots, faXmark, faCircleCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'

/* 위에서 import한 아이콘들을 Core library에 등록 */
library.add( fas, far, fab, faChevronLeft, faChevronRight, faBell, faCheck, faPen, faCircleExclamation, faUser, faCircleUser, faBullhorn, faAnglesRight, faAnglesLeft, faBarsProgress, faFloppyDisk, faCircleXmark, faQuoteLeft, faQuoteRight, faCommentDots, faXmark, faCircleCheck, faMagnifyingGlass )

/* font awesome 컴포넌트를 전역으로 등록 */
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.use(Vue3Toastify)
app.mount('#app')

register()