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
    <InputWithToggle :isVisible="isVisible" @visibilityHandler="" />
    <div class="box" :style="{ display: isVisible }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MultipleInputWithoutButton from "@/components/MultipleInputWithoutButton/MultipleInputWithoutButton.vue";
import MultipleInputWithButton from "@/components/MultipleInputWithButton/MultipleInputWithButton.vue";
import InputWithToggle from "@/components/InputWithToggle/InputWithToggle.vue";

type Visibility = "flex" | " none";

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
    isVisible: "flex" as Visibility,
  }),
  computed: {},
  methods: {},
});
</script>
