<template>
  <div class="map-block">
    <h1 class="map-block-title">{{ item.id }}</h1>
    <h3 class="map-block-subtitle">{{ item.title }}</h3>
    <p class="map-block-description">{{ item.description }}</p>
  </div>
</template>

<script>

export default {
  name: 'MapBlock',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return { };
  },
};
</script>

<style scoped lang="scss">
@import '../scss/colors.scss';

.map-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  
  // Desktop
  @media (min-width: 1024px) {
    width: calc(100% / 3 - 1rem);
  }
  
  // Tablet and Mobile
  @media (max-width: 1023px) {
    width: 40%;
    min-width: 280px;
  }

  h1.map-block-title{
    font-size: 4rem;
    font-weight: 300;
    font-family: 'DM Sans', sans-serif;
    color: $color-gray-500;
    text-align: left;
  }

  h3.map-block-subtitle{
    font-size: 1.2rem;
    font-family: 'Crimson Text', serif;
    font-weight: 100;
    text-align: left;
  }
  
  p.map-block-description{
    font-size: 1.1rem;
    font-family: 'Crimson Text', serif;
    font-weight: 100;
    color: $color-gray-600;
    text-align: left;
  }
}
</style>