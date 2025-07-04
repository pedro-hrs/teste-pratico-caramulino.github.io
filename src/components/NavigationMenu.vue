<template>
  <!-- Desktop Navigation (992px+) -->
  <nav class="navbar navbar-expand-lg fixed-top d-none d-lg-block">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <h3 class="brand">Area</h3>
      </router-link>
      <div class="navbar-nav mx-auto">
        <div class="nav-item" v-for="(item, index) in items" :key="index">
          <router-link v-if="item.link.startsWith('/')" class="nav-link" :to="item.link">{{ item.label }}</router-link>
          <a v-else class="nav-link" @click="handleAnchorClick(item.link)" href="javascript:void(0)">{{ item.label }}</a>
        </div>
      </div>
      <BaseButton label="Learn More" withIcon variant="primary"/>
    </div>
  </nav>
  
  <!-- Mobile Navigation (< 992px) -->
  <nav class="navbar navbar-expand-lg fixed-top d-lg-none">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <h3 class="brand">Area</h3>
      </router-link>
      <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#mobileNavbar" 
      aria-controls="mobileNavbar" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
      @keydown.enter="toggleMobileMenu"
      @keydown.space="toggleMobileMenu"
      >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mobileNavbar">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(item, index) in items" :key="index">
          <router-link v-if="item.link.startsWith('/')" class="nav-link" :to="item.link">{{ item.label }}</router-link>
          <a v-else class="nav-link" @click="handleMobileAnchorClick(item.link)" href="javascript:void(0)">{{ item.label }}</a>
        </li>
      </ul>
      <div class="mobile-button-container">
        <BaseButton label="Learn More" withIcon variant="primary"/>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
import BaseButton from './BaseButton.vue';
import { Collapse } from 'bootstrap';

export default {
  name: 'NavigationMenu',
  components: {
    BaseButton
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleAnchorClick(anchor) {
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
    
    handleMobileAnchorClick(anchor) {
      // Close mobile menu
      const navbarCollapse = document.querySelector('#mobileNavbar');
      
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        try {
          const bsCollapse = new Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        } catch (error) {
          navbarCollapse.classList.remove('show');
        }
      }
      
      this.handleAnchorClick(anchor);
    },
    
    scrollToAnchor(anchor) {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        // Focus management for accessibility
        element.setAttribute('tabindex', '-1');
        element.focus();
      }
    },
    
    toggleMobileMenu() {
      const navbarCollapse = document.querySelector('#mobileNavbar');
      if (navbarCollapse) {
        const isExpanded = navbarCollapse.classList.contains('show');
        const button = document.querySelector('.navbar-toggler');
        
        if (isExpanded) {
          navbarCollapse.classList.remove('show');
          button.setAttribute('aria-expanded', 'false');
        } else {
          navbarCollapse.classList.add('show');
          button.setAttribute('aria-expanded', 'true');
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
// Desktop Navigation
.navbar {
  &.d-none.d-lg-block {
    background-color: transparent;
    box-shadow: none;
    padding: 20px 0;
    
    
    .navbar-brand {
      .brand {
        font-size: 1.7rem;
        font-weight: 400;
        color: #000;
        font-family: "DM Sans", sans-serif;
        margin: 0;
      }
    }
    
    .navbar-nav {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      top: 20px;
      background-color: rgba(255, 255, 255, 0.40);
      backdrop-filter: blur(15px);
      border-radius: 100px;
      padding: 6px 30px;
      z-index: 999;
      width: 550px;
      
      .nav-item {
        margin: 0 15px;
        
        .nav-link {
          text-decoration: none;
          color: #000;
          font-weight: 600;
          font-size: 0.9rem;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.3s ease;
          
          &:hover {
            color: #485c11;
          }
          
          &.router-link-active {
            color: #485c11;
            font-weight: 700;
          }
        }
      }
    }
  }
}

// Mobile Navigation
.navbar {
  &.d-lg-none {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    padding: 20px 20px;
    border-radius: 0px 0px 20px 20px;
    
    
    .navbar-brand {
      .brand {
        font-size: 1.7rem;
        font-weight: 400;
        color: #000;
        font-family: "Crimson Text", serif;
        margin: 0;
      }
    }
    
    .navbar-toggler {
      border: none;
      padding: 0;
      
      &:focus {
        box-shadow: none;
      }
      
      .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }
    }
    ul.navbar-nav{
      gap: 10px;
      font-size: 1rem;
      font-family: "Crimson Text", serif;
    }
    .navbar-collapse {
      background-color: white;
      border-radius: 0 0 20px 20px;
      margin-top: 10px;
      padding: 20px;
      .navbar-nav {
        .nav-item {
          margin: 10px 0;
          
          .nav-link {
            font-size: 1.1rem;
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
            color: #000;
            font-weight: 600;
            border-bottom: 1px solid #f0f0f0;
            font-family: "Crimson Text", serif;
            transition: color 0.3s ease;
            
            &:last-child {
              border-bottom: none;
            }
            
            &:hover {
              color: #485c11;
            }
            
            &.router-link-active {
              color: #485c11;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}

    // Adjust for content not to be under the fixed navbar
body {
  padding-top: 80px;
}

@media (max-width: 991px) {
  body {
    padding-top: 70px;
  }
}
</style>
