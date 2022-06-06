<template>
  <div>
    <input
      ref="input"
      type="text"
      placeholder="Update title ..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  $refs: {
    input: HTMLInputElement,
  },

  name: "InputWithoutButton",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data: () => ({}),
  computed: {},
  methods: {},
});
</script>
