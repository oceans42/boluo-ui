import "./lib/gulu.scss"
import './index.scss'
import { createApp } from 'vue' // 创建app实例的函数
import App from './App.vue'
import { router } from './router'
import './lib/svg.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
