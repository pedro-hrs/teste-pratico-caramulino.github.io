<template>
  <section id="phrase">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-5 py-3">
          <img src="@/assets/balls.avif" class="img-phrase fade-in-up" alt="balls">
        </div>
        <div class="col-md-6 py-3">
          <h3 class="phrase-title fade-in-up">“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”</h3>
          <p class="phrase-name">John Doe</p>
          <p class="phrase-job">CEO, Company Name</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'PhraseSection',
}
</script>

<style scoped lang="scss">
@import '../../scss/colors.scss';

#phrase{
  padding: 5rem 0;
}
.img-phrase{
  width: 100%;
  height: 700px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

h3.phrase-title{
  font-size: 2rem;
  font-family: 'Crimson Text', serif;
  font-weight: light;
  margin-bottom: 2rem;
}
p.phrase-name{
  font-size: 1.2rem;
  font-weight: 300;
  font-family: 'DM Sans', sans-serif;
  margin-bottom: 0.5rem;
}
p.phrase-job{
  font-family:'Courier New', Courier, monospace;
  color: $color-primary;
  font-size: 1rem;
  font-weight: 400;
} 
</style>