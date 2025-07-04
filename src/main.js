import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'
import './scss/main.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)
app.use(AOS)

app.mount('#app')

// Initialize AOS after app is mounted
AOS.init({
  duration: 1300,
  
  once: false,
  easing: 'ease-in-out',
  delay: 0,
  mirror: true,
})
