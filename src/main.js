import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'
import * as Icons from '@element-plus/icons-vue'
const app = createApp(App)
app.use(VueAxios,axios)
app.use(store).use(router).use(ElementPlus).mount('#app')
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})
