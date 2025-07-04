<template>
  <div id="app">
    <NavigationMenu :items="menuItems" />
    <router-view />
  </div>
</template>

<script>
// import BaseButton from './components/BaseButton.vue';
import NavigationMenu from './components/NavigationMenu.vue';

export default {
  name: 'App',
  components: {
    NavigationMenu,
  },
  data() {
    return {
      menuItems: [
        { label: 'Benefits', link: '#benefits' },
        { label: 'Specifications', link: '/specifications' },
        { label: 'How-to', link: '/How-to' },
        { label: 'Contact Us', link: '/contact' }
      ]
     }
  }
}
</script>