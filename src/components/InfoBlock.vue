<template>
  <div class="info-block">
    <div class="info-content">
      <img class="icon" :src="`@/assets/icons/${iconName}`" alt="">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InfoBlock',
  props: {
    title: {
      type: String,
      default: "Default Title",
      required: true
    },
    description: {
      type: String,
      default: "Default description text.",
      required: true
    },
    iconName: {
      type: String,
      default: "",
      required: false
    }
  },
  data() {
    return {};
  }
};

</script>

<style scoped lang="scss">
@import '../scss/colors.scss';

.info-block {
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 1rem;
}

.icon {
  width: 20px;
  height: 20px;
  margin-bottom: 1.5rem;
}
</style>