<template>
  <div id="app">
    <div class="top-button">
      <el-button @click="goToStudentMode" type="text">学生模式</el-button>
      <el-button @click="goToTeacherMode" type="text">教师模式</el-button>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { useControlStore } from "./stores/control";

const controlStore = useControlStore();

const goToStudentMode = () => {
  controlStore.setMode("student");
};

const goToTeacherMode = () => {
  controlStore.setMode("teacher");
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
