import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import './scss/main.scss'

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
