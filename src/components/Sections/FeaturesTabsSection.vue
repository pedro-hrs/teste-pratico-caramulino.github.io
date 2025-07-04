<template>
  <section id="features-tabs" class="features-tabs-section">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12">
          <span class="monospace">Features</span>
          <h2 class="title fade-in-up">Explore Our Features</h2>
          <p class="description">Discover the powerful tools that make Area the perfect solution for your business needs.</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-12">
          <!-- Tabs Navigation -->
          <ul class="nav nav-pills mb-4" id="featuresTab" role="tablist">
            <li class="nav-item" role="presentation" v-for="(tab, index) in tabsData" :key="tab.id">
              <button 
                class="nav-link" 
                :class="{ active: activeTab === tab.id }"
                :id="`${tab.id}-tab`" 
                data-bs-toggle="pill" 
                :data-bs-target="`#${tab.id}-pane`" 
                type="button" 
                role="tab" 
                :aria-controls="`${tab.id}-pane`" 
                :aria-selected="activeTab === tab.id"
                @click="setActiveTab(tab.id)"
              >
                {{ tab.title }}
              </button>
            </li>
          </ul>
          
          <!-- Tab Content -->
          <div class="tab-content" id="featuresTabContent">
            <div 
              v-for="(tab, index) in tabsData" 
              :key="tab.id"
              class="tab-pane fade" 
              :class="{ show: activeTab === tab.id, active: activeTab === tab.id }"
              :id="`${tab.id}-pane`" 
              role="tabpanel" 
              :aria-labelledby="`${tab.id}-tab`"
            >
              <div class="row align-items-center">
                <div class="col-md-6">
                  <div class="tab-content-text">
                    <h3>{{ tab.title }}</h3>
                    <p>{{ tab.description }}</p>
                    <ul class="feature-list">
                      <li v-for="feature in tab.features" :key="feature">{{ feature }}</li>
                    </ul>
                    <BaseButton label="Learn More" variant="primary" withIcon/>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="tab-content-image">
                    <img :src="`/src/assets/${tab.image}`" :alt="tab.title" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'FeaturesTabsSection',
  components: {
    BaseButton
  },
  data() {
    return {
      activeTab: 'analytics',
      tabsData: [
        {
          id: 'analytics',
          title: 'Analytics',
          description: 'Get deep insights into your business performance with our advanced analytics dashboard.',
          image: 'landscape.avif',
          features: [
            'Real-time data visualization',
            'Custom dashboard creation',
            'Export reports in multiple formats',
            'Advanced filtering options'
          ]
        },
        {
          id: 'automation',
          title: 'Automation',
          description: 'Automate repetitive tasks and streamline your workflow with intelligent automation tools.',
          image: 'montain.avif',
          features: [
            'Workflow automation',
            'Scheduled reports',
            'Email notifications',
            'Integration with third-party tools'
          ]
        },
        {
          id: 'collaboration',
          title: 'Collaboration',
          description: 'Work together seamlessly with team collaboration features designed for modern businesses.',
          image: 'balls.avif',
          features: [
            'Team workspace management',
            'Real-time collaboration',
            'Comment and feedback system',
            'Role-based permissions'
          ]
        }
      ]
    }
  },
  methods: {
    setActiveTab(tabId) {
      this.activeTab = tabId;
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/colors.scss';

.nav-pills {
  justify-content: start;
  gap: 1rem;
  
  .nav-link {
    border-radius: 100px;
    padding: 12px 24px;
    font-size: 0.9rem;
    font-weight: 600;
    color: $color-gray-600;
    background-color: transparent;
    border: 2px solid $color-gray-300;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: $color-primary;
      color: $color-primary;
    }
    
    &.active {
      background-color: $color-primary;
      border-color: $color-primary;
      color: white;
    }
  }
}

.tab-content {
  margin-top: 3rem;
}

.tab-pane {
  transition: opacity 0.3s ease;
  
  &.fade {
    opacity: 0;
  }
  
  &.show {
    opacity: 1;
  }
}

.tab-content-text {
  h3 {
    font-size: 2rem;
    font-family: 'Crimson Text', serif;
    font-weight: 100;
    margin-bottom: 1rem;
    color: $color-black;
  }
  
  p {
    font-size: 1.1rem;
    color: $color-gray-600;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  
  li {
    padding: 0.5rem 0;
    font-size: 1rem;
    color: $color-gray-700;
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: $color-primary;
      font-weight: bold;
    }
  }
}

.tab-content-image {
  text-align: center;
}

.image-placeholder {
  border-radius: 20px;
  box-shadow: $shadowDefault;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, $color-primary-light 0%, $color-secondary 100%);
  position: relative;
  overflow: hidden;
  
  &.analytics-bg {
    background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
  }
  
  &.automation-bg {
    background: linear-gradient(135deg, #2196F3 0%, #64B5F6 100%);
  }
  
  &.collaboration-bg {
    background: linear-gradient(135deg, #FF9800 0%, #FFB74D 100%);
  }
  
  .placeholder-content {
    text-align: center;
    color: white;
    
    i {
      font-size: 4rem;
      margin-bottom: 1rem;
      display: block;
    }
    
    h4 {
      font-size: 1.5rem;
      font-family: 'Crimson Text', serif;
      font-weight: 100;
      margin: 0;
    }
  }
}

// Mobile responsiveness
@media (max-width: 768px) {
  .nav-pills {
    flex-direction: column;
    align-items: center;
    
    .nav-link {
      width: 100%;
      max-width: 300px;
      text-align: center;
    }
  }
  
  .tab-content-text {
    h3 {
      font-size: 1.5rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
  
  .tab-content-image {
    margin-top: 2rem;
  }
  
  .image-placeholder {
    height: 200px;
    
    .placeholder-content {
      i {
        font-size: 2.5rem;
      }
      
      h4 {
        font-size: 1.2rem;
      }
    }
  }
}
</style> 