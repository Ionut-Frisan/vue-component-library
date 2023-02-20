<template>
  <span :class="containerClasses"
  >
    <input
        type="checkbox"
        :checked="modelValue"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :name="name"
    >
    <label tabindex="0"
           @focusin="handleFocusIn"
           @focusout="handleFocusOut"
           @click="handleChange"
    >{{ label }}</label>
  </span>
</template>

<script setup>
import "../assets/styles/components/checkbox.scss";
import {computed, ref} from "vue";

const props = defineProps({
  modelValue: Boolean,
  value: String,
  label: String,
  size: {
    type: String,
    default: 'md',
    validator(value) {
      return ['sm', 'md', 'lg'].includes(value);
    }
  },
  labelPosition: {
    type: String,
    default: 'right',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: String,
});

const emits = defineEmits(['update:modelValue', 'change']);
const hasLabel = computed(() => !!props.label);
const sizes = ['sm', 'md', 'lg'];

const checked = ref(props.modelValue || false);

const containerClasses = computed(() => {
  return [
    `f-checkbox`,
    {'label-start': props.labelPosition === 'left'},
    {checked: props.modelValue},
    sizes.includes(props.size) ? props.size : 'md',
    {readonly: props.readonly},
    {disabled: props.disabled}
  ]
})

const handleChange = () => {
  if (props.disabled || props.readonly) return;
  emits('update:modelValue', !props.modelValue);
  // emits('change', event);
}

const handleKeyboard = (event) => {
  if (event.key === ' ') handleChange();
}

const handleFocusIn = (event) => {
  window.addEventListener('keyup', handleKeyboard);
}

const handleFocusOut = (event) => {
  window.removeEventListener('keyup', handleKeyboard);
}

</script>

<style scoped>

</style>