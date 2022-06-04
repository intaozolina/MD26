<template>
  <div class="toDoList__hero">
    <form @submit.prevent="addToList">
      <label>
        <input
          type="text"
          class="toDoList__input"
          ref="input"
          required
          placeholder="Add new task ..."
          v-model="inputValue"
        />
      </label>
      <button class="add__btn">Add</button>
    </form>
    <div class="list" v-if="toDoList.length > 0">
      <ul class="toDoList__list">
        <li
          class="toDoLists__list-item"
          v-for="({ name, isComplete }, index) in filteredToDoList"
          :key="name"
        >
          <div class="toDoList__text" :class="{ checked: isComplete }">
            <input
              type="checkbox"
              :checked="isComplete"
              @change="getChecked(index)"
            />
            {{ name }}
          </div>
          <button class="delete__btn" @click="removeFromList(index)">X</button>
        </li>
      </ul>
    </div>
    <div class="filter__box">
      <button class="filter__btn" @click="getFilter('all')">All</button>
      <button class="filter__btn" @click="getFilter('inProgress')">
        In progress
      </button>
      <button class="filter__btn" @click="getFilter('isCompleted')">
        Completed
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./toDoList.scss";

type ToDo = {
  name: string;
  isComplete: boolean;
};

type FilterCondition = "all" | "inProgress" | "isCompleted";

export default defineComponent({
  $refs: {
    input: HTMLInputElement,
  },

  name: "ToDoList",
  data: () => ({
    inputValue: "",
    toDoList: [] as ToDo[],
    filterCondition: "all" as FilterCondition,
  }),
  computed: {
    filteredToDoList() {
      if (this.filterCondition === "inProgress") {
        return this.toDoList.filter((toDo) => !toDo.isComplete);
      } else if (this.filterCondition === "isCompleted") {
        return this.toDoList.filter((toDo) => toDo.isComplete);
      } else if (this.filterCondition === "all") {
        return this.toDoList;
      }
      return this.toDoList;
    },
  },
  methods: {
    addToList() {
      this.toDoList = [
        ...this.toDoList,
        { name: this.inputValue, isComplete: false },
      ];
      this.inputValue = "";
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.$refs.input.focus();
    },
    removeFromList(index: number) {
      this.toDoList = this.toDoList
        .slice(0, index)
        .concat(this.toDoList.slice(index + 1, this.toDoList.length));
    },
    getFilter(condition: FilterCondition) {
      this.filterCondition = condition;
    },
    getChecked(index: number) {
      const newToDoList = [...this.toDoList];
      newToDoList[index].isComplete = !newToDoList[index].isComplete;
      this.toDoList = newToDoList;
    },
  },
});
</script>
