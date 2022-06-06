<template>
  <button @click="$emit('visibilityHandler')">Toggle</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputWithToggle",
  emits: ["visibilityHandler"],
  data: () => ({}),
  computed: {},
  methods: {},
});
</script>
