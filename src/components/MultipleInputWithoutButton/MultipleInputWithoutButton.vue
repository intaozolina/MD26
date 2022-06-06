<template>
  <div>
    <input
      type="text"
      placeholder="Update title ..."
      :value="secondTitle"
      @input="$emit('update:secondTitle', $event.target.value)"
    />
    <input
      type="text"
      placeholder="Update description ..."
      :value="secondDescription"
      @input="$emit('update:secondDescription', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MultipleInputWithoutButton",
  props: ["secondTitle", "secondDescription"],
  emits: ["update:secondTitle", "update:secondDescription"],
  data: () => ({}),
  computed: {},
  methods: {},
});
</script>
