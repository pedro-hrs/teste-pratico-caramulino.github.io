<template>
  <main class="container">
    <HeroSection title="Browse everything."/>
    <TrustedBrandsSection class="fade-in-delay"/>
    <hr>
    <BenefitsSection
     title="We've cracked the code."
     subtitle="Area provides real insights, without the data overload." :benefits="benefits"/>
    <BigPictureSection/>
  </main>
</template>
<script>

// Components
import HeroSection from '../components/Sections/HeroSection.vue';
import TrustedBrandsSection from '../components/Sections/TrustedBrandsSection.vue';
import BenefitsSection from '../components/Sections/BenefitsSection.vue';
import BigPictureSection from '../components/Sections/BigPictureSection.vue';

export default {
  name: 'Home',
  components: {
    HeroSection,
    TrustedBrandsSection,
    BenefitsSection,
    BigPictureSection
  },
  data() {
    return {
      benefits: [
        { title: 'Amplify Insights', subtitle: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.', icon: 'amplify.svg' },
        { title: 'Control Your Global Presence', subtitle: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.', icon: 'world.svg' },
        { title: 'Remove Language Barriers', subtitle: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.', icon: 'user.svg' },
        { title: 'Visualize Growth', subtitle: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.', icon: 'growth.svg' },
      ]
    }
  }
}
</script> 