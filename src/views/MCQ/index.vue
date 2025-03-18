<template>
  <div class="mt-2 mb-4">
    <el-button @click="goHome">返回首页</el-button>
  </div>
  <div class="flex justify-center">
    <student-MCQ v-if="controlStore.mode === 'student'" />
    <teacher-MCQ v-if="controlStore.mode === 'teacher'" />
  </div>
</template>

<script lang="ts" setup>
import StudentMCQ from "./student-MCQ.vue";
import TeacherMCQ from "./teacher-MCQ.vue";

import { useControlStore } from "../../stores/control";
const controlStore = useControlStore();

import { useRouter } from "vue-router";
const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
