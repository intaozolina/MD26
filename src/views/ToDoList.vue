<template>
  <div class="toDoList__hero">
    <label>
      <input
        type="text"
        class="toDoList__input"
        placeholder="Add new task ..."
        v-model="inputValue"
      />
    </label>
    <button class="add__btn" @click="addToList">Add</button>
    <div class="list" v-if="toDoList.length > 0">
      <ul class="toDoList__list" v-if="filtered">
        <li
          class="toDoLists__list-item"
          v-for="(toDo, index) in filteredToDoList"
          :key="index"
        >
          <input
            type="checkbox"
            :checked="toDo.isComplete"
            @change="getChecked(index)"
          />
          {{ toDo.name }}
          <button @click="removeFromList(index)">X</button>
        </li>
      </ul>
      <ul class="toDoList__list" v-if="!filtered">
        <li
          class="toDoLists__list-item"
          v-for="(toDo, index) in toDoList"
          :key="index"
        >
          <input
            type="checkbox"
            :checked="toDo.isComplete"
            @change="getChecked(index)"
          />
          {{ toDo.name }}
          <button class="delete__btn" @click="removeFromList(index)">X</button>
        </li>
      </ul>
    </div>
    <div class="filter__box">
      <button class="filter__btn" @click="showAll">All</button>
      <button
        class="filter__btn"
        :class="{ active: !progress }"
        @click="getFilter(true)"
      >
        In progress
      </button>
      <button
        class="filter__btn"
        :class="{ active: completed }"
        @click="getFilter(false)"
      >
        Completed
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/views/toDoList.scss";

type ToDo = {
  name: string;
  isComplete: boolean;
};

export default defineComponent({
  name: "ToDoList",
  data: () => ({
    inputValue: "",
    toDoList: [] as ToDo[],
    filtered: false,
    progress: true,
    completed: false,
  }),
  computed: {
    filteredToDoList() {
      if (this.progress) {
        return this.toDoList.filter((toDo) => !toDo.isComplete);
      } else {
        return this.toDoList.filter((toDo) => toDo.isComplete);
      }
    },
  },
  methods: {
    addToList() {
      this.toDoList = [
        ...this.toDoList,
        { name: this.inputValue, isComplete: false },
      ];
      this.inputValue = "";
    },
    removeFromList(index: number) {
      this.toDoList = this.toDoList
        .slice(0, index)
        .concat(this.toDoList.slice(index + 1, this.toDoList.length));
    },
    showAll() {
      this.filtered = false;
      this.completed = false;
      this.progress = false;
    },
    getFilter(condition: boolean) {
      this.filtered = true;
      this.completed = !this.progress;
      this.progress = condition;
    },
    getChecked(index: number) {
      const newToDoList = [...this.toDoList];
      newToDoList[index].isComplete = !newToDoList[index].isComplete;
      this.toDoList = newToDoList;
    },
  },
});
</script>
