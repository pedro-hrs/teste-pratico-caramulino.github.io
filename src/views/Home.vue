<template>
  <main id="main-content" tabindex="-1">
    <HeroSection 
      title="Browse everything."/>
    <TrustedBrandsSection 
      class="fade-in-delay"/>
    <hr>
    <BenefitsSection
      title="We've cracked the code."
      subtitle="Area provides real insights, without the data overload."
      :benefitsData="benefitsData"/>
    <BigPictureSection
      :bigPictureData="bigPictureData"/>
    <hr>
    <SpecsSection/>
    <PhraseSection/>
    <hr>
    <MapYourSuccessSection
      title="Map Your Success"
      :mapYourSuccessData="mapYourSuccessData" />
    
    <FeaturesTabsSection/>
    <ConnectUsSection/>
    <Footer/>
  </main>
</template>
<script>

// Components
import HeroSection from '../components/Sections/HeroSection.vue';
import TrustedBrandsSection from '../components/Sections/TrustedBrandsSection.vue';
import BenefitsSection from '../components/Sections/BenefitsSection.vue';
import BigPictureSection from '../components/Sections/BigPictureSection.vue';
import SpecsSection from '../components/Sections/SpecsSection.vue';
import PhraseSection from '../components/Sections/PhraseSection.vue';
import MapYourSuccessSection from '../components/Sections/MapYourSuccessSection.vue';
import FeaturesTabsSection from '../components/Sections/FeaturesTabsSection.vue';
import ConnectUsSection from '../components/Sections/ConnectUsSection.vue';
import Footer from '../components/Footer.vue';


export default {
  name: 'Home',
  components: {
    HeroSection,
    TrustedBrandsSection,
    BenefitsSection,
    BigPictureSection,
    SpecsSection,
    PhraseSection,
    MapYourSuccessSection,
    FeaturesTabsSection,
    ConnectUsSection,
    Footer
  },
  data() {
    return {
      benefitsData: [
        { title: 'Amplify Insights', subtitle: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.', icon: 'amplify.svg' },
        { title: 'Control Your Global Presence', subtitle: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.', icon: 'world.svg' },
        { title: 'Remove Language Barriers', subtitle: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.', icon: 'user.svg' },
        { title: 'Visualize Growth', subtitle: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.', icon: 'growth.svg' },
      ],
      bigPictureData: [
        { id: "01", title: 'Spot Trends in Seconds: No more digging through numbers.' },
        { id: "02", title: 'Get Everyone on the Same Page: Share easy-to-understand reports with your team. ' },
        { id: "03", title: 'Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.' },
        { id: "04", title: 'Your Global Snapshot: Get a quick, clear overview of your entire operation.' },
      ],
      mapYourSuccessData: [
        { id: "01", title: 'Get Started', description: 'With our intuitive setup, you’re up and running in minutes.' },
        { id: "02", title: 'Customize and Configure', description: 'Adapt Area to your specific requirements and preferences.' },
        { id: "03", title: 'Grow Your Business', description:"Make informed decisions to exceed your goals." },
      ]
    }
  }
}
</script> 