<template>
  <div class="title__box">
    <h1 class="title">{{ firstTitle }}</h1>
    <InputWithButton v-model="firstTitle" />
  </div>
  <div class="title__box">
    <h1 class="title">{{ secondTitle }}</h1>
    <InputWithoutButton v-model="secondTitle" />
  </div>
  <div class="task__box">
    <InputWithButton v-model="boxColorOne" />
    <div class="box" :style="{ backgroundColor: boxColorOne }"></div>
  </div>
  <div class="task__box">
    <InputWithoutButton v-model="boxColorTwo" />
    <div class="box" :style="{ backgroundColor: boxColorTwo }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputWithoutButton from "@/components/InputWithoutButton/InputWithoutButton.vue";
import InputWithButton from "@/components/InputWithButton/InputWithButton.vue";

export default defineComponent({
  components: { InputWithoutButton, InputWithButton },

  name: "OneInputTasks",
  data: () => ({
    firstTitle: "Virsraksts 1",
    secondTitle: "Virsraksts 2",
    boxColorOne: "transparent",
    boxColorTwo: "transparent",
  }),
  computed: {},
  methods: {},
});
</script>
<style>
.box {
  margin: 10px auto;
  width: 100px;
  height: 100px;
  border: 1px solid grey;
}

.task__box,
.title__box {
  max-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  border: 1px solid grey;
  padding: 30px;
  margin: 10px auto;
}
.title__box {
  flex-direction: column;
}
.title {
  display: block;
}
</style>
