import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhTW from 'element-plus/es/locale/lang/zh-tw'
import 'virtual:svg-icons-register'
import globalComponents from '@/components'
import '@/styles/index.scss'
import router from '@/router'

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhTW,
})
app.use(globalComponents)
app.use(router)

// test mock

app.mount('#app')
