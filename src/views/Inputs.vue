<template>
  <f-input label="Input sm" size="sm" type="url" placeholder="Small" label-position="left" v-model="test" @change="handleChange"/>
  <br>
  <f-input label="Input md" size="md" placeholder="Medium" :readonly="true"/>
  <br>
  <f-input label="Input lg" size="lg" placeholder="Large" :disabled="true" :rounded="true"/>
  <br>
</template>

<script setup>
import FInput from "../components/FInput.vue";
import {ref} from "vue";

const test = ref('Test for v-model');

const handleChange = (event) => {
  console.log(event);
}
</script>
<style scoped>

</style>