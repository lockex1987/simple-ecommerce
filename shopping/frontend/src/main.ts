import './scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'
import mixin from './mixin'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mixin(mixin)
app.mount('#app')
