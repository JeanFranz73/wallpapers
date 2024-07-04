import '@fontsource-variable/fira-code'
import '@/assets/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { installStores } from '@/stores'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

installStores()

app.mount('#app')
