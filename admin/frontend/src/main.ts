import './scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import mixin from './mixin'
import axios from 'axios'

const ROOT_API = 'http://127.0.0.1:3333'
axios.defaults.baseURL = ROOT_API

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mixin(mixin)
app.mount('#app')
