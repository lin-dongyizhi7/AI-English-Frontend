<template>
  <div id="app">
    <div class="top-button">
      <el-button
        @click="goToStudentMode"
        :disabled="!getStatus()"
        text
        :type="controlStore.mode === 'student' ? 'success' : 'info'"
        >学生模式</el-button
      >
      <el-button
        @click="goToTeacherMode"
        :disabled="!getStatus()"
        text
        :type="controlStore.mode === 'teacher' ? 'success' : 'info'"
        >教师模式</el-button
      >
      <el-select
        :disabled="!getStatus()"
        v-model="grade"
        placeholder="Select"
        style="width: 150px"
        @change="changeGrade"
      >
        <el-option
          v-for="item in grades"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import { useControlStore } from "./stores/control";
import { grades } from "./constant";

const controlStore = useControlStore();

const goToStudentMode = () => {
  controlStore.setMode("student");
};

const goToTeacherMode = () => {
  controlStore.setMode("teacher");
};

const grade = ref(controlStore.grade);

import { useRouter } from "vue-router";
const router = useRouter();
// const useable = computed(() => {
//   const currentPath = router.currentRoute.value.path;
//   if (currentPath === "/mcq" || currentPath === "/vocabulary") return false;
//   return true;
// });

const getStatus = () => {
  const currentPath = router.currentRoute.value.path;
  if (currentPath === "/mcq" || currentPath === "/vocabulary") return false;
  return true;
};

const changeGrade = (val) => {
  controlStore.setGrade(val);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: calc(100vh - 64px);
  padding: 4px 0;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
</style>
