<template>
  <button :class="`btn btn-${variant}`" @click="handleClick">{{ label }}
    <img v-if="withIcon" src="@/assets/icons/arrow-up-right.svg"  width="8px" height="8px" :withIcon="withIcon" alt="Arrow Icon" class="mx-2" />
  </button>
</template>
<script>

export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: 'Click Me'
    },
    withIcon: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: 'primary'
    },
    navigateTo: {
      type: String,
      default: null
    }
  },
  methods: {
    handleClick() {
      // Verify if there is a specific navigation defined
      if (this.navigateTo) {
        this.navigateToAnchor(this.navigateTo);
      }
      
      // Emit event
      this.$emit('click');
    },
    
    navigateToAnchor(anchor) {
      // If we are on a different page than home, navigate to home first
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          // After navigating to home, scroll to the anchor
          this.$nextTick(() => {
            this.scrollToAnchor(anchor);
          });
        });
      } else {
        // If we are already on the home page, just scroll to the anchor
        this.scrollToAnchor(anchor);
      }
    },
    
    scrollToAnchor(anchor) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}

</script>

<style scoped lang="scss">
@import "../scss/colors.scss";

.btn {
  border-radius: 100px;
  font-size: 0.8rem;
  padding: 12px 20px;
}
.btn-primary {
  background-color: #485c11;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: $color-primary-light;
  }
}
.btn-secondary {
  background-color: $color-secondary;
  color: $color-gray-800;
  border: none;
  transition: background-color 0.3s ease;
}
</style>