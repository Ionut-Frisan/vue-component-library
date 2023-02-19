<template>
  <span :class="containerClasses">
    <label v-if="hasLabel">{{ label }}</label>
    <span :class="inputClasses">
      <i :class="icon"
         v-if="hasIcon"
        :style="iconStyle"
      ></i>
      <input
          :placeholder="placeholder"
          :value="modelValue"
          :type="computedType"
          :readonly="readonly"
          :disabled="disabled"
          :required="required"
          :minlength="minlength"
          :maxlength="maxlength"
          :name="name"
          :autoComplete="autoComplete"
          @change="handleChange"
      />
    </span>
  </span>
</template>

<script setup>
import "../assets/styles/components/input.scss";
import {computed} from "vue";

// TODO: hint, help?, validation?

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
  required: {
    type: Boolean,
    default: false,
  },
  minlength: Number,
  maxlength: Number,
  autoComplete: {
    type: Boolean,
    default: false,
  },
  name: String,
  type: {
    type: String,
    default: 'text',
  },
  icon: String,
  iconPosition: {
    type: String,
    default: 'start',
  },
  iconColor: String,
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
    {'icon-end': props.iconPosition === 'end'}
  ]
})

const containerClasses = computed(() => {
  return [
    'f-input-container',
    {inline: props.labelPosition === 'left'}
  ]
})

const hasIcon = computed(() => !!props.icon && !props.readonly);

const iconStyle = computed(() => {
  const style = {};
  if(props.iconColor) style.color = props.iconColor;
  return style;
})

const handleChange = (event) => {
  emits('update:modelValue', event.target.value);
  emits('change', event);
}

</script>

<style>

</style>