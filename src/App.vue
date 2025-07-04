<template>
  <div class="container">
    <h1>Hello Word! </h1>
    <button class="btn btn-primary"@click="click()">Button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    click() {
      this.count++;
      console.log(`Button clicked ${this.count} times`);
    }
  }
}
</script>

<style scoped lang="scss">

</style>
