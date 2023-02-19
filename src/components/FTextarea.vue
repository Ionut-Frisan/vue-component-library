<template>
  <span :class="containerClasses">
    <label v-if="hasLabel">{{ label }}</label>
      <textarea
          :class="inputClasses"
          :placeholder="placeholder"
          :value="modelValue"
          :readonly="readonly"
          :disabled="disabled"
          :required="required"
          :minlength="minlength"
          :maxlength="maxlength"
          :name="name"
          :cols="cols"
          :rows="rows"
          :wrap="wrapComputed"
          @change="handleChange"
      />
  </span>
</template>

<script setup>
import "../assets/styles/components/textarea.scss";
import {computed} from "vue";

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
  cols: Number || String,
  rows: Number || String,
  labelPosition: {
    type: String,
    default: 'top',
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
  name: String,
  resize: {
    type: String,
    default: 'vertical',
  },
  wrap: {
    type: String,
    default: 'soft',
    validator(value) {
      return ['soft', 'hard'].includes(value);
    }
  },
  // icon: String,
  // iconPosition: {
  //   type: String,
  //   default: 'start',
  // },
  // iconColor: String,
});

const emits = defineEmits(['update:modelValue', 'change']);

const hasLabel = computed(() => !!props.label);

const containerClasses = computed(() => {
  return [
    'f-textarea-container',
    {inline: props.labelPosition === 'left'}
  ]
})

const resizeNoneComputed = computed(() => {
  return props.resize === 'none' || props.readonly || props.disabled;
})

const inputClasses = computed(() => {
  const sizes = ['sm', 'md', 'lg'];
  return [
    'f-textarea',
    {rounded: props.rounded},
    {'resize-vertical': props.resize === 'vertical' && !resizeNoneComputed.value},
    {'resize-horizontal': props.resize === 'horizontal' && !resizeNoneComputed.value},
    {'resize-none': resizeNoneComputed.value},
    sizes.includes(props.size) ? props.size : 'md',
    {flexible: props.cols === undefined},
  ]
})

const wrapComputed = computed(() => {
  return ['soft', 'hard'].includes(props.wrap) ? props.wrap : 'soft';
})

const handleChange = (event) => {
  emits('update:modelValue', event.target.value);
  emits('change', event);
}
</script>

<style scoped>

</style>