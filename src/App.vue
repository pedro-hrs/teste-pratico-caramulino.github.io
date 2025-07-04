<template>
  <div id="app" class="container">
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
        { label: 'Specifications', link: '#specifications' },
        { label: 'How-to', link: '#map-your-success' },
        { label: 'Contact Us', link: '#connect-us' }
      ]
     }
  }
}
</script>