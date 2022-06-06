import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MultipleInputTasks from "@/components/MultipleInputTasks/MultipleInputTasks.vue";
import OneInputTasks from "@/components/OneInputTasks/OneInputTasks.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "oneInputTask",
    component: OneInputTasks,
  },
  {
    path: "/multiple",
    name: "multipleInputTask",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MultipleInputTasks,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
