<template>
  <f-textarea
    label="Textarea sm"
    size="sm"
    placeholder="Placeholder"
  ></f-textarea>
  <f-textarea
    label="Textarea md"
    placeholder="Placeholder"
  ></f-textarea>
  <f-textarea
    label="Textarea lg"
    size="lg"
    placeholder="Placeholder"
  ></f-textarea>
  <div class="horizontal-separator"></div>
  <f-textarea
    label="Textarea sm"
    size="sm"
    placeholder="Placeholder"
    rounded
    disabled
  ></f-textarea>
  <f-textarea
    label="Textarea md"
    placeholder="Placeholder"
    rounded
    disabled
  ></f-textarea>
  <f-textarea
    label="Textarea lg"
    size="lg"
    placeholder="Placeholder"
    rounded
    disabled
  ></f-textarea>
  <div class="horizontal-separator"></div>
  <f-textarea
    label="Textarea sm"
    size="sm"
    placeholder="Placeholder"
    rounded
    readonly
  ></f-textarea>
  <f-textarea
    label="Textarea md"
    placeholder="Placeholder"
    rounded
    readonly
  ></f-textarea>
  <f-textarea
    label="Textarea lg"
    size="lg"
    placeholder="Placeholder"
    rounded
    readonly
  ></f-textarea>
  <div class="horizontal-separator"></div>
  <f-textarea
    label="Resize vertical(default)"
    size="sm"
    placeholder="Placeholder"
    resize="vertical"
  ></f-textarea>
  <f-textarea
    label="Resize horizontal"
    placeholder="Placeholder"
    resize="horizontal"
  ></f-textarea>
  <f-textarea
    label="Resize all"
    size="lg"
    placeholder="Placeholder"
    resize="all"
  ></f-textarea>
  <div class="horizontal-separator"></div>
  <f-textarea
    label="Rows 2"
    size="sm"
    placeholder="Placeholder"
    rows="2"
  ></f-textarea>
  <f-textarea
    label="Rows 5"
    placeholder="Placeholder"
    resize="horizontal"
    rows="5"
  ></f-textarea>
  <f-textarea
    label="Rows 10"
    size="lg"
    placeholder="Placeholder"
    rows="10"
  ></f-textarea>
  <div class="horizontal-separator"></div>
</template>

<script setup>
import FTextarea from "../components/FTextarea.vue";
</script>

<style scoped>

</style>