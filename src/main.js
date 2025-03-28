import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/common.css"
import router from './router/router'
import vuetyped from 'vue3typed'
import api from "./api"
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import store from './store'


const app = createApp(App)
app.use(api)
app.use(vuetyped)
app.use(ElementPlus)
app.use(store)
app.use(router).mount('#app')
