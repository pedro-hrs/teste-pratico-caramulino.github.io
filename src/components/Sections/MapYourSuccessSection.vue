<template>
  <section id="map-your-success" class="map-your-success-section">
    <div class="container">
      <div class="wrapper-title">
        <h2 class="title">{{ title }}</h2>
        <BaseButton label="Discover More" variant="secondary" navigateTo="#connect-us"/>
      </div>
      <hr>
      <div class="map-container">
        <MapBlock v-for="mapItem in mapYourSuccessData"
        data-aos="fade"
        :key="mapItem.id"
        :item="mapItem"/>
      </div>
      <div class="row">
        <div class="col-md-12">
          <img src="@/assets/montain.avif" class="montain-image img-fluid" alt="Map Your Success" data-aos="fade" data-aos-delay="500">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import MapBlock from '@/components/MapBlock.vue';

export default {
  name: 'MapYourSuccessSection',
  components: {
    BaseButton,
    MapBlock
  },  
  props: {
    title: {
      type: String,
      required: true
    },
    mapYourSuccessData: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      item: this.mapYourSuccessData // Default to the first item
    }
  }
};

</script>

<style scoped lang="scss">

.wrapper-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.map-container {
  display: flex;
  gap: 20px;
  width: 100%;
  
  // Desktop: mostra todos os cards lado a lado
  @media (min-width: 1024px) {
    justify-content: start;
    flex-wrap: wrap;
  }
  
  // Tablet e Mobile: scroll horizontal
  @media (max-width: 1023px) {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 10px; // Espaço para scrollbar
    
    // Esconde scrollbar no webkit
    &::-webkit-scrollbar {
      height: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 3px;
      
      &:hover {
        background: #a8a8a8;
      }
    }
    
    // Garante que os cards não quebrem linha
    > * {
      flex-shrink: 0;
    }
  }
}

.montain-image{
  margin-top: 5rem;
  width: 100%;
  height: 70vh;
  object-fit: cover;
  border-radius: 40px;
}
</style>