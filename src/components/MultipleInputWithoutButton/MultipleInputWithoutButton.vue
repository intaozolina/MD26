<template>
  <div>
    <input
      type="text"
      placeholder="Update title ..."
      :value="nextTitle"
      @input="$emit('update:nextTitle', $event.target.value)"
    />
    <input
      type="text"
      placeholder="Update title ..."
      :value="nextDescription"
      @input="$emit('update:nextDescription', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MultipleInputWithoutButton",
  props: ["nextTitle", "nextDescription"],
  emits: ["update:nextTitle", "update:nextDescription"],
  data: () => ({}),
  computed: {},
  methods: {},
});
</script>
