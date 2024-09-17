import './assets/style/global.scss'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { i18n } from './i18n/i18n';

import App from './App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); 

app.use(pinia)
app.use(i18n)
app.use(router)

app.mount('#app')
