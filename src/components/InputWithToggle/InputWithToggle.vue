<template>
  <button @click="$emit('visibilityHandler', !isVisible)">Toggle</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputWithToggle",
  props: ["isVisible"],
  emits: ["visibilityHandler"],
  data: () => ({}),
  computed: {},
  methods: {},
});
</script>
