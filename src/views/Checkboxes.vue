<template>
  <f-checkbox label="Checkbox small" v-model="test" size="sm"></f-checkbox>
  <f-checkbox label="Checkbox medium" v-model="test" size="md"></f-checkbox>
  <f-checkbox label="Checkbox large" v-model="test" size="lg"></f-checkbox>
  <div class="horizontal-separator"></div>
  <f-checkbox label="Checkbox small disabled" v-model="test" disabled size="sm"></f-checkbox>
  <f-checkbox label="Checkbox medium disabled" v-model="test" disabled size="md"></f-checkbox>
  <f-checkbox label="Checkbox large disabled" v-model="test" disabled size="lg"></f-checkbox>
  <div class="horizontal-separator"></div>
  <f-checkbox label="Checkbox small readonly" v-model="test" readonly size="sm"></f-checkbox>
  <f-checkbox label="Checkbox medium readonly" v-model="test" readonly size="md"></f-checkbox>
  <f-checkbox label="Checkbox large readonly" v-model="test" readonly size="lg"></f-checkbox>
</template>

<script setup>
import {ref} from "vue";
import FCheckbox from "../components/FCheckbox.vue";

const test = ref(true);
</script>

<style scoped>

</style>