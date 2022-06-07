import './scss/style.scss'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import './libs/axios'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(createPinia() as any)
app.use(router as any)
// app.use(ElementPlus)
app.mount('#app')
