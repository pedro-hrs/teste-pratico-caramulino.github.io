<template>
  <section id="big-picture">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-6 py-2">
          <hr>
          <h2 class="title">See the Big Picture</h2>
          <p class="description">Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>
          <div class="items">
            <ul v-for="bigPictureItem in bigPictureData" :key="bigPictureItem.title">
              <li>
                <span>{{ bigPictureItem.id }}</span>
                <p>{{bigPictureItem.title}}</p>
              </li>
            </ul>
          </div>
          <BaseButton label="Discover More" variant="secondary" />
        </div>
        <div class="col-md-6 py-2">
          <img src="@/assets/blocks.avif" class="img-fluid blocks"> 
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'BigPicture',
  components: {
    BaseButton
  },
  props: {
    bigPictureData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      items: this.bigPictureData || []
    }
  }
}
</script>
<style scoped lang="scss">
@import './../../scss/colors.scss';

#big-picture{
  padding: 4rem 0;
}

.blocks{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
}

.items{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
}

ul{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    border-top: 1px solid $color-gray-300;
    padding-top: 1rem;
    margin-bottom: 0;
    padding-bottom: 0rem;

    span{
      font-size: 0.85rem;
      font-weight: 500;
      color: $color-gray-600;
    }
    p{
      padding: 0;
      margin: 0;
    }
  }
}
</style>