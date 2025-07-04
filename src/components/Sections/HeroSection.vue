<template>
  <section id="hero">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="hero-content">
            <h1 class="title fade-in-up" >{{title}}</h1>
            <div class="wrapper-image" >
              <div class="device fade-in">
              <img class="dynamic-island" src="@/assets/dynamic-island.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: 'Hero',
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: "",
      required: true
    }
  },
  components: {
  }
}
</script>


<style scoped lang="scss">
@import '@/scss/colors.scss';

.hero-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12rem;
}

h1.title{
  line-height: 90%;
  font-size: 8.5rem;
  letter-spacing: -0.05em;
  font-weight: 100;
  color: #000;
  text-align: center;
  font-family: 'Crimson Text', sans-serif;
  text-align: center;
}
.wrapper-image{
  background-color: $color-primary-light;
  border-radius: 25px;
  height: 362px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.device{
  background: url('@/assets/image.webp');
  background-size: cover;
  background-position: top center;
  border-radius: 50px 50px 0 0;
  border-top: 15px solid #000;
  border-left: 15px solid #000;
  border-right: 15px solid #000;
  height: 462px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 80%;
  position: absolute;
  bottom: 0;
}

.dynamic-island{
  display:none;
}

// Media queries for mobile devices
@media (max-width: 768px) {
  h1.title{
    font-size: 4.5rem;
    font-weight: 100;
  }
  body{
    background-color: red;
  }
  .device{
    border-top: 10px solid #000;
    border-left: 10px solid #000;
    border-right: 10px solid #000;
    border-radius: 35px 35px 0 0;
    height: 400px;
    width: 270px;
    background-image: url('@/assets/image-mobile.avif');
  }
  .hero-content{
    gap: 5rem;
  }
  .dynamic-island{
    display: block;
    width: 100%;
    height: 55px;
    padding: 15px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    }
}


</style>