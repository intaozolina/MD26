<template>
  <div class="title__box">
    <MultipleInputWithButton
      v-model:title="title"
      v-model:description="description"
    />
    <div>
      <h1 class="title">{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
  <div class="title__box">
    <MultipleInputWithoutButton
      v-model:secondTitle="secondTitle"
      v-model:secondDescription="secondDescription"
    />
    <div>
      <h1 class="title">{{ secondTitle }}</h1>
      <p>{{ secondDescription }}</p>
    </div>
  </div>
  <div>
    <InputWithToggle @visibilityHandler="displayChange" />
    <div class="box" :style="{ display: boxDisplay }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MultipleInputWithoutButton from "@/components/MultipleInputWithoutButton/MultipleInputWithoutButton.vue";
import MultipleInputWithButton from "@/components/MultipleInputWithButton/MultipleInputWithButton.vue";
import InputWithToggle from "@/components/InputWithToggle/InputWithToggle.vue";

type BoxDisplay = "flex" | "none";
export default defineComponent({
  components: {
    InputWithToggle,
    MultipleInputWithoutButton,
    MultipleInputWithButton,
  },
  name: "MultipleInputTasks",
  data: () => ({
    title: "Title",
    description: "Description",
    secondTitle: "Title 2",
    secondDescription: "Description 2",
    isVisible: true,
    boxDisplay: "flex" as BoxDisplay,
  }),
  computed: {},
  methods: {
    displayChange() {
      this.isVisible = !this.isVisible;
      if (this.isVisible) {
        this.boxDisplay = "flex";
      } else {
        this.boxDisplay = "none";
      }
    },
  },
});
</script>
