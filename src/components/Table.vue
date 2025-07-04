<template>
  <div class="table-shadow-wrapper">
    <table class="custom-table">
      <thead>
        <tr>
          <th v-for="item in items" :key="item.key">{{ item.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rowIndex in maxRows" :key="rowIndex">
          <td v-for="item in items" :key="item.key">
            <template v-if="item.child[rowIndex - 1]">
              <span class="enabled" v-if="item.child[rowIndex - 1].enabled">{{ item.child[rowIndex - 1].label }}</span>
              <span class="disabled" v-else>{{ item.child[rowIndex - 1].label }}</span>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="table-left-shadow"></div>
  </div>
</template>
<script>
export default {
  name: 'Table',
  data(){
    return {
      items: [
        { label: 'Area', key: 'area',child:[
          {label: 'Ultra-fast browsing', key: 'ultra-fast-browsing', enabled: true},
          {label: 'Advanced AI insights', key: 'advanced-ai-insights-1', enabled: true},
          {label: 'Seamless integration', key: 'seamless-integration', enabled: true},
          {label: 'Advanced AI insights', key: 'advanced-ai-insights-2', enabled: true},
          {label: 'Ultra-fast browsing', key: 'ultra-fast-browsing-2', enabled: true},
          {label: 'Full UTF-8 support', key: 'full-utf-8-support', enabled: true}
        ] },
        { label: 'WebSurge', key: 'websurge',child:[
          {label: 'Fast browsing', key: 'fast-browsing', enabled: true},
          {label: 'Basic AI recommendations', key: 'basic-ai-recommendations', enabled: true},
          {label: 'Restricts customization', key: 'restricts-customization', enabled: true},
          {label: 'Basic AI insights', key: 'basic-ai-insights', enabled: false},
          {label: 'Fast browsing', key: 'fast-browsing-2', enabled: true},
          {label: 'Potential display errors', key: 'potential-display-errors', enabled: false}
        ] },
        { label: 'HyperView', key: 'hyperview',child:[
          {label: 'Moderate speeds', key: 'moderate-speeds', enabled: false},
          {label: 'No AI assistance', key: 'no-ai-assistance', enabled: false},
          {label: 'Steep learning curve', key: 'steep-learning-curve', enabled: false},
          {label: 'No AI assistance', key: 'no-ai-assistance', enabled: false},
          {label: 'Moderate speeds', key: 'moderate-speeds', enabled: false},
          {label: 'Partial UTF-8 support', key: 'partial-utf-8-support', enabled: false}
        ] },
      ]
    }
  },
  computed: {
    maxRows() {
      // Returns the largest number of features among products
      return Math.max(...this.items.map(item => item.child.length));
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/colors.scss';

.table-shadow-wrapper {
  position: relative;
  width: 100%;
  overflow-x: scroll;
  margin: 2rem 0;
  
  .custom-table {
    margin: 20px;
    width: 100%;
    min-width: 960px;
    table-layout: fixed;
    border-collapse: collapse;
    margin: 20px 0;
    border-radius: 20px 0 0 20px;
    overflow: hidden;
    border-spacing: 0;
    border-style: hidden;

    th, td {
      padding: 20px;
      text-align: left;
      border: 1px solid $color-gray-200;
      width: 280px;
      min-width: 280px;
      max-width: 280px;
      box-sizing: border-box;
      word-break: break-word;
    }
    th:first-child, td:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      position: relative;
      z-index: 1;
      border-right: none;
    }
    th:nth-child(2), td:nth-child(2) {
      border-left: none;
    }
  }
  .table-left-shadow {
    right: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 31%;
    height: 100%;
    pointer-events: none;
    width: 280px;
    min-width: 280px;
    max-width: 280px;
    border-radius: 20px 20px 20px 20px;
    border-right: 1px solid $color-gray-300;
    margin: 0px;
    box-shadow: 8px 0 32px -8px rgba(0, 0, 0, 0.16);
    z-index: 2;
  }
}

span.enabled:before {
  content: '✓';
  font-size: 1.2rem;
  color: #4CAF50;
  margin-right: 6px;
}
span.disabled:before {
  content: '×';
  font-size: 1.2rem;
  color: #f44336;
  margin-right: 6px;
}

span {
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Courier New', Courier, monospace;
}
</style>