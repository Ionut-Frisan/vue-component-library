<template>
  <span :class="containerClasses">
    <label v-if="hasLabel">{{ label }}</label>
      <input
          :class="inputClasses"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          :value="modelValue"
          :type="computedType"
          @change="handleChange"
      />
  </span>
</template>

<script setup>
import "../assets/styles/components/input.scss";
import {computed} from "vue";
// TODO add icons + remaining props
const props = defineProps({
  modelValue: String,
  label: String,
  rounded: {
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
  labelPosition: {
    type: String,
    default: 'top',
  },
  as: {
    type: String,
    default: 'input'
  },
  placeholder: String,
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  }
});

const emits = defineEmits(['update:modelValue', 'change']);

const hasLabel = computed(() => !!props.label);
const sizes = ['sm', 'md', 'lg'];

const computedType = computed(() => {
  const typeMapping = {
    text: 'text',
    password: 'password',
    email: 'email',
    search: 'search',
    url: 'url',
    tel: 'tel'
    // time: 'time',
    // date: 'date'
  };
  return typeMapping[props.type] || 'text';
})

const inputClasses = computed(() => {
  return [
    'f-input',
    sizes.includes(props.size) ? props.size : 'md',
    {rounded: props.rounded},
  ]
})

const containerClasses = computed(() => {
  return [
    'f-input-container',
    {inline: props.labelPosition === 'left'}
  ]
})

const handleChange = (event) => {
  emits('update:modelValue', event.target.value);
  emits('change', event);
}

</script>

<style>

</style>