import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import i18n from './lang/index'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import './style/index.css'

const app = createApp(App)
// 使用pinia
app.use(createPinia())

// 使用elementUi
app.use(ElementPlus, {
    locale: zhLocale,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 国际化
app.use(i18n)

// 加载路由等
app.use(router)

app.mount('#app')
