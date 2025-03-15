import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/home/index.vue";
import Student from "../views/student/index.vue";
import Teacher from "../views/teacher/index.vue";
import Vocabulary from "../views/vocabulary/index.vue";
import MCQ from "../views/MCQ/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/student",
    name: "Student",
    component: Student,
  },
  {
    path: "/teacher",
    name: "Teacher",
    component: Teacher,
  },
  {
    path: "/vocabulary",
    name: "vocabulary",
    component: Vocabulary,
  },
  {
    path: "/mcq",
    name: "mcq",
    component: MCQ,
    props: (route: any) => ({ mode: route.query.mode }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
