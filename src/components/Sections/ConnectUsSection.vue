<template>
  <section id="connect-us">
    <hr>
    <div class="container">
      <div class="row justify-content-center align-items-center py-5">
        <div class="col-md-12">
          <h2 class="title">Connect Us</h2>
          <p class="description">Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
          <div class="button-group">
            <router-link to="/contact">
              <BaseButton label="Learn More" variant="primary" withIcon/>
            </router-link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="external-link">
              <BaseButton label="View Documentation" variant="secondary"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </section>
</template>
<script>
import BaseButton from '@/components/BaseButton.vue';
export default {
  name: 'ConnectUsSection',
  components: {
    BaseButton
  }
}
</script>
<style scoped lang="scss">
#connect-us{
  text-align: center;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.external-link {
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
}
</style>