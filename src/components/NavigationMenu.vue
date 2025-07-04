<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <h3 class="brand">Area</h3>
      </router-link>
    </div>
    <nav class="float-navigation">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <router-link v-if="item.link.startsWith('/')" :to="item.link">{{ item.label }}</router-link>
          <a v-else :href="item.link">{{ item.label }}</a>
        </li> 
      </ul>
    </nav>
    <BaseButton label="Learn More" withIcon variant="primary" class="call-to-action"/>
  </header>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  name: 'NavigationMenu',
  components: {
    BaseButton
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // You can add any additional data properties here if needed
    };
  }
};

</script>


<style scoped lang="scss">
header{
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}
.brand{
  font-size: 1.7rem;
  font-weight: 400;
  color: #000;
  text-decoration: none;
  font-family: "DM Sans", sans-serif;
}

.logo a {
  text-decoration: none;
  color: inherit;
}
.float-navigation{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.493);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 20px 20px;
  max-width: 500px;
  min-width: 300px;
  position: fixed;
  top: 20px;
  border-radius: 100px;
  ul{
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li{
    margin: 0 10px;
    a, .router-link-active{
      text-decoration: none;
      color: #000;
      font-weight: 600;
      font-size: 0.8rem;
      font-family: 'DM Sans', sans-serif;
      transition: color 0.3s ease;
      &:hover{
        color: #485c11;
      }
    }
    .router-link-active {
      color: #485c11;
      font-weight: 700;
    }
  }

}

</style>
