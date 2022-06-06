<template>
  <div>
    <input
      ref="input"
      type="text"
      placeholder="Update title ..."
      v-model="value"
    />
    <button @click="$emit('update:modelValue', value)">Change</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  $refs: {
    input: HTMLInputElement,
  },

  name: "InputWithButton",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data: () => ({
    value: "",
  }),
  computed: {},
  methods: {},
});
</script>
