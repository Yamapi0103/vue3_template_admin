import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhTW from 'element-plus/es/locale/lang/zh-tw'

const app = createApp(App).use(ElementPlus, {
  locale: zhTW,
})

import 'virtual:svg-icons-register'

import globalComponents from '@/components'
app.use(globalComponents)

app.mount('#app')
