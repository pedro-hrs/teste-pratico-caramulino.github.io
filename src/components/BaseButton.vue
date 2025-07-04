<template>
  <button :class="`btn btn-${variant}`">{{ label }}
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
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
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