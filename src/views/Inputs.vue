<template>
  <f-input label="Input sm" size="sm" placeholder="Small"/>
  <br>
  <f-input label="Input md" size="md" placeholder="Medium" />
  <br>
  <f-input label="Input lg" size="lg" placeholder="Large"/>
  <br>
  <div class="horizontal-separator"></div>
  <f-input label="Input sm" size="sm" placeholder="Small" :rounded="true"/>
  <br>
  <f-input label="Input md" size="md" placeholder="Medium" :rounded="true"/>
  <br>
  <f-input label="Input lg" size="lg" placeholder="Large" :rounded="true"/>
  <br>
  <div class="horizontal-separator"></div>
  <f-input label="Input sm" size="sm" placeholder="Small" :readonly="true"/>
  <br>
  <f-input label="Input md" size="md" placeholder="Medium" :readonly="true"/>
  <br>
  <f-input label="Input lg" size="lg" placeholder="Large" :readonly="true"/>
  <br>
  <div class="horizontal-separator"></div>
  <f-input label="Input sm" size="sm" placeholder="Small" :disabled="true"/>
  <br>
  <f-input label="Input md" size="md" placeholder="Medium" :disabled="true"/>
  <br>
  <f-input label="Input lg" size="lg" placeholder="Large" :disabled="true"/>
  <br>
  <div class="horizontal-separator"></div>
  <f-input label="Input sm" size="sm" placeholder="Small" icon="bi bi-chat-right-dots-fill" icon-position="end"/>
  <br>
  <f-input label="Input md" size="md" placeholder="Medium" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <f-input label="Input lg" size="lg" placeholder="Large" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <div class="horizontal-separator"></div>
  <f-input label="Input sm" size="sm" placeholder="Small" :rounded="true" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <f-input label="Input md" size="md" placeholder="Medium" :rounded="true" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <f-input label="Input lg" size="lg" placeholder="Large" :rounded="true" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <div class="horizontal-separator"></div>
  <f-input label="Input sm" size="sm" placeholder="Small" :readonly="true" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <f-input label="Input md" size="md" placeholder="Medium" :readonly="true" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <f-input label="Input lg" size="lg" placeholder="Large" :readonly="true" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <div class="horizontal-separator"></div>
  <f-input label="Input sm" size="sm" placeholder="Small" :disabled="true" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <f-input label="Input md" size="md" placeholder="Medium" :disabled="true" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <f-input label="Input lg" size="lg" placeholder="Large" :disabled="true" icon="bi bi-chat-right-dots-fill"/>
  <br>
  <div class="horizontal-separator"></div>
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
.horizontal-separator{
  width: 98%;
  margin: auto 1rem;
  height: 0.1rem;
  background-color: #4b5563;
}
</style>