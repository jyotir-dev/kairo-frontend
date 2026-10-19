// Base CS
import './styles/base.css'

// Vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vue App
const app = createApp(App)
app.use(router)
app.mount('#app')
