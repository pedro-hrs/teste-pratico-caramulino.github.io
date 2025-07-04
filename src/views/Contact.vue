<template>
  <main id="contact">
    <section class="container">
      <div class="row justify-content-center align-items-center py-5">
        <div class="col-md-6">
          <img src="@/assets/blocks.avif" alt="Contact Image" class="contact-image img-fluid">
        </div>
        <div class="col-md-6">
          <h1 class="title">Contact Us</h1>
          <p class="description">We're here to help you with any questions or concerns you may have. Please fill out the form below and we'll get back to you as soon as possible.</p>
          <BaseButton label="Learn More" variant="primary" withIcon @click="openFormModal"/>
        </div>
      </div>
    </section>
    <hr>
    <Footer/>
    
    <ContactFormModal 
      :isOpen="isFormModalOpen"
      @close="closeFormModal"
      @success="handleFormSuccess"
    />
  </main>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import Footer from '@/components/Footer.vue';
import ContactFormModal from '@/components/ContactFormModal.vue';

export default {
  name: 'Contact',
  components: {
    BaseButton,
    Footer,
    ContactFormModal
  },
  data() {
    return {
      isFormModalOpen: false
    }
  },
  methods: {
    openFormModal() {
      this.isFormModalOpen = true;
    },
    
    closeFormModal() {
      this.isFormModalOpen = false;
    },
    
    handleFormSuccess(formData) {
      console.log('Form sent successfully:', formData);
    }
  }
}
</script>

<style scoped>
.contact-image{
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 40px;
}
.contact-content {
  padding: 50px 30px;
  text-align: center;
}

.contact-content h1 {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 20px;
  color: #333;
}

.contact-content p {
  font-size: 1.1rem;
  color: #666;
}
</style> 