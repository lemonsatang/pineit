// Necessaries
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vue3Toastify from 'vue3-toastify'

// API
import { createPinia } from 'pinia'
import { createMachine } from 'xstate'

// Else
import 'vue-global-api'
import 'remixicon/fonts/remixicon.css'
import './assets/scss/style.css'
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
import { faCircleExclamation, faCheck, faBell, faChevronLeft, faChevronRight, faPen, faUser, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'

/* 위에서 import한 아이콘들을 Core library에 등록 */
library.add( fas, far, fab, faChevronLeft, faChevronRight, faBell, faCheck, faPen, faCircleExclamation, faUser, faCircleUser )

/* font awesome 컴포넌트를 전역으로 등록 */
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.use(Vue3Toastify)
app.mount('#app')

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
