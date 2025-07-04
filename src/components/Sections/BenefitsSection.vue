<template>
  <section id="benefits">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12">
          <div class="benefits-content">
            <span class="monospace">Benefits</span>
            <h2 class="title fade-in-up">{{ title }}</h2>
            <p class="subtitle fade-in">{{ subtitle }}</p>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <InfoBlock class="col-md-3" v-for="benefit in benefits"
        :key="benefit.title"
        :title="benefit.title"
        :description="benefit.subtitle"
        :iconName="benefit.icon"/>
      </div>
      <img src="@/assets/landscape.avif" class="img-fluid landscape"> 
    </div>
  </section>
</template>

<script>
import InfoBlock from './../InfoBlock.vue';
export default {
  name: 'Benefits',
  components: {
    InfoBlock
  },
  props: {
    title: {
      type: String,
      default: "We’ve cracked the code.",
      required: true
    },
    subtitle: {
      type: String,
      default: "Area provides real insights, without the data overload.",
      required: true
    },
    benefits: {
      type: Array,
      default: [],
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import '../../scss/colors.scss';

.landscape{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
}
</style>