import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import { library } from '@fortawesome/fontawesome-svg-core'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDog  } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import './assets/main.css'
import "vue-toastification/dist/index.css";
import  "tabulator-tables/dist/css/tabulator.min.css";
library.add(faDog)
library.add(faPen)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(Toast)
.use(VueLoading)
.mount('#app')
