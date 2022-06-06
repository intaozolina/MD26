<template>
  <div class="title__box">
    <MultipleInputWithButton
      v-model:title="title"
      ,
      v-model:description="description"
    />
    <div>
      <h1 class="title">{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
  <div class="title__box">
    <MultipleInputWithoutButton
      v-model:nextTitle="nextTitle"
      ,
      v-model:nextDescription="nextDescription"
    />
    <div>
      <h1 class="title">{{ nextTitle }}</h1>
      <p>{{ nextDescription }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MultipleInputWithoutButton from "@/components/MultipleInputWithoutButton/MultipleInputWithoutButton.vue";
import MultipleInputWithButton from "@/components/MultipleInputWithButton/MultipleInputWithButton.vue";

export default defineComponent({
  components: { MultipleInputWithoutButton, MultipleInputWithButton },
  name: "MultipleInputTasks",
  data: () => ({
    title: "Title",
    description: "Description",
    nextTitle: "Title 2",
    nextDescription: "Description 2",
  }),
  computed: {},
  methods: {},
});
</script>
