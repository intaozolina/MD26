<template>
  <div>
    <input
      ref="input"
      type="text"
      placeholder="Update title ..."
      v-model="inputTitle"
    />
    <button
      @click="
        $emit('update:title', inputTitle);
        this.inputTitle = '';
      "
    >
      Change
    </button>
  </div>
  <div>
    <input
      type="text"
      placeholder="Update description ..."
      v-model="inputDescription"
    />
    <button
      @click="
        $emit('update:description', inputDescription);
        this.inputDescription = '';
      "
    >
      Change
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MultipleInputWithButton",
  props: ["title", "description"],
  emits: ["update:title", "update:description"],
  data: () => ({
    inputTitle: "",
    inputDescription: "",
  }),
  computed: {},
  methods: {},
});
</script>
