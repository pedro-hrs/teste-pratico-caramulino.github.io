import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router