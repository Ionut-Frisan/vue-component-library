<template>
  <button :class="classes">{{ label }}</button>
</template>

<script setup>
import "../assets/styles/components/button.scss";
import {computed} from "vue";

const props = defineProps({
  rounded: {
    type: Boolean,
    default: false,
  },
  label: String,
  outlined: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
    validator(value) {
      return ['sm', 'md', 'lg'].includes(value);
    }
  },
  length: {
    type: String,
    default: 'fit',
    validator(value) {
      return ['fit', 'full'].includes(value);
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'];
      return variants.includes(value);
    },
  }
});

const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'success', 'link'];
const sizes = ['sm', 'md', 'lg'];
const classes = computed(() => {
  return [
    'f-button',
    variants.includes(props.variant) ? props.variant : 'primary',
    sizes.includes(props.size) ? props.size : 'md',
    {rounded: props.rounded},
    {outlined: props.outlined},
    {loading: props.loading},
    {flexible: props.length === 'flexible'}
  ]

})

</script>

<style lang="scss">
</style>