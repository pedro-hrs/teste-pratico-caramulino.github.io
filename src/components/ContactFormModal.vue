<template>
  <div class="modal fade" :class="{ show: isOpen }" :style="{ display: isOpen ? 'block' : 'none' }" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="contactModalLabel">Contact Us</h5>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm" ref="contactForm">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input 
                type="text" 
                class="form-control" 
                id="name" 
                v-model="formData.name"
                :class="{ 'is-invalid': errors.name }"
                required
                aria-describedby="name-error"
                autocomplete="name"
              >
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name }}
              </div>
            </div>
            
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input 
                type="email" 
                class="form-control" 
                id="email" 
                v-model="formData.email"
                :class="{ 'is-invalid': errors.email }"
                required
                aria-describedby="email-error"
                autocomplete="email"
              >
              <div class="invalid-feedback" v-if="errors.email">
                {{ errors.email }}
              </div>
            </div>
            
            <div class="mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <input 
                type="tel" 
                class="form-control" 
                id="phone" 
                v-model="formData.phone"
                :class="{ 'is-invalid': errors.phone }"
                aria-describedby="phone-error"
                autocomplete="tel"
              >
              <div class="invalid-feedback" v-if="errors.phone">
                {{ errors.phone }}
              </div>
            </div>
            
            <div class="mb-3">
              <label for="subject" class="form-label">Subject</label>
              <select 
                class="form-select" 
                id="subject" 
                v-model="formData.subject"
                :class="{ 'is-invalid': errors.subject }"
                required
              >
                <option value="">Select a subject</option>
                <option value="general">Envoince</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
              <div class="invalid-feedback" v-if="errors.subject">
                {{ errors.subject }}
              </div>
            </div>
            
            <div class="mb-3">
              <label for="message" class="form-label">Message *</label>
              <textarea 
                class="form-control" 
                id="message" 
                rows="4" 
                v-model="formData.message"
                :class="{ 'is-invalid': errors.message }"
                required
                aria-describedby="message-error"
                placeholder="Digite sua mensagem aqui..."
              ></textarea>
              <div class="invalid-feedback" v-if="errors.message">
                {{ errors.message }}
              </div>
            </div>
            
            <div class="d-flex justify-content-end gap-2">
              <BaseButton label="Cancel" variant="tertiary" @click="closeModal" @keydown.enter="closeModal" @keydown.space="closeModal"/> 
              <BaseButton label="Send" variant="primary" @click="submitForm" @keydown.enter="submitForm" @keydown.space="submitForm"/> 
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Modal Backdrop -->
  <div v-if="isOpen" class="modal-backdrop fade show" @click="closeModal"></div>
</template>

<script>

import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'ContactFormModal',
  components: {
    BaseButton
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      errors: {},
      isSubmitting: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.resetForm();
    },
    
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
      this.errors = {};
      this.isSubmitting = false;
    },
    
    validateForm() {
      // TODO: Add form validation
      console.log('Form validated');
    },
    
    submitForm() {
      this.validateForm();
      // TODO: Add form submission
      console.log('Form submitted');
    },
    
    showSuccessMessage() {
      // TODO: Add success message
      console.log('Success message');
    },
    
    showErrorMessage() {
      // TODO: Add error message
      console.log('Error message');
    }
  }
}
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-backdrop {
  z-index: 1040;
}

.modal {
  z-index: 1050;
}

.toast {
  z-index: 9999;
}
</style> 