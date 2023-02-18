<template>
  <div>
    <f-button
        v-for="(variant, index) in variants"
        :key="20 + index"
        :variant="variant"
        :rounded="false"
        :outlined="true"
        :label="variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="20 + index"
        :variant="variant"
        :rounded="false"
        :outlined="false"
        :label="variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="10 + index"
        :variant="variant"
        :rounded="true"
        :outlined="true"
        :label="variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="index"
        :variant="variant"
        :rounded="true"
        :label="variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="10 + index"
        :variant="variant"
        :rounded="true"
        :outlined="true"
        :disabled="true"
        :label="variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="30 + index"
        :variant="variant"
        :rounded="true"
        :outlined="false"
        :disabled="true"
        :label="variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="70 + index"
        :variant="variant"
        :rounded="true"
        :outlined="false"
        :disabled="false"
        size="sm"
        :label="'sm-'+variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="80 + index"
        :variant="variant"
        :rounded="true"
        :outlined="false"
        :disabled="false"
        size="md"
        :label="'md-'+variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="90 + index"
        :variant="variant"
        :rounded="true"
        :outlined="false"
        :disabled="false"
        size="lg"
        :label="'lg-'+variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="70 + index"
        :variant="variant"
        :rounded="false"
        :outlined="true"
        :disabled="false"
        size="sm"
        :label="'sm-'+variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="80 + index"
        :variant="variant"
        :rounded="false"
        :outlined="true"
        :disabled="false"
        size="md"
        :label="'md-'+variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="90 + index"
        :variant="variant"
        :rounded="false"
        :outlined="true"
        :disabled="false"
        size="lg"
        :label="'lg-'+variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="70 + index"
        :variant="variant"
        :rounded="false"
        :outlined="true"
        :disabled="true"
        size="sm"
        :label="'sm-'+variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="80 + index"
        :variant="variant"
        :rounded="false"
        :outlined="true"
        :disabled="true"
        size="md"
        :label="'md-'+variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="90 + index"
        :variant="variant"
        :rounded="false"
        :outlined="true"
        :disabled="true"
        size="lg"
        :label="'lg-'+variant">
    </f-button>
    <br>
    <br>
    <f-button
        v-for="(variant, index) in variants"
        :key="100 + index"
        :variant="variant"
        :rounded="false"
        :outlined="false"
        :disabled="false"
        size="lg"
        :loading="true"
        :label="'loading-'+variant">
    </f-button>
    <br>
    <br>
    <div style="width: 50%">
      <f-button
          variant="primary"
          :rounded="false"
          :outlined="false"
          :disabled="false"
          size="lg"
          :length="'flexible'"
          label="flexible">
      </f-button>
    </div>
  </div>
</template>

<script setup>
import FButton from "../components/FButton.vue";

const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'];
const sizes = ['sm', 'md', 'lg'];
</script>
<style scoped>

</style>