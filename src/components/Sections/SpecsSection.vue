<template>
  <section id="specifications">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <span class="monospace">Specs</span>
          <h2 class="title fade-in-up">Why Choose Area?</h2>
          <p class="description">
            You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamline your business. 
          </p>
          <BaseButton label="Discover More" variant="secondary" navigateTo="#connect-us"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <Table/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import Table from '@/components/Table.vue';

export default {
  name: 'SpecsSection',
  components: {
    BaseButton,
    Table
  }
  }
</script>

<style scoped lang="scss">
@import '../../scss/colors.scss';

#specifications{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3% 0 ;
  text-align: center;
}
</style>