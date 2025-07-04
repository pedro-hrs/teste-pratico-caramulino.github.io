<template>
  <section>
    <div class="container py-5">
      <p class="brand-line">Trusted by</p>
      <div class="brands-grid">
        <img class="brand-image" src="@/assets/brands/brand-1.png" alt="Brand 1" />
        <img class="brand-image" src="@/assets/brands/brand-2.png" alt="Brand 2" />
        <img class="brand-image" src="@/assets/brands/brand-3.avif" alt="Brand 3" />
        <img class="brand-image" src="@/assets/brands/brand-4.png" alt="Brand 4" />
        <img class="brand-image" src="@/assets/brands/brand-5.png" alt="Brand 5" />
        <img class="brand-image" src="@/assets/brands/brand-6.png" alt="Brand 6" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.brand-line {
  text-align: left;
  font-size: 0.9rem;
  color: #6f6f6f;
  margin-bottom: 2rem;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  align-items: center;
  justify-items: center;

  @media (max-width: 990px) { // Tablet
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
  }

  @media (max-width: 562px) { // Celular
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, auto);
  }
  @media (max-width: 375.98px) { // Celular
    grid-template-columns: 2fr;
    grid-template-rows: repeat(3, auto);
  }
}

.brand-image {
  width: 140px;
  padding: 1rem;
  height: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}
</style>