<template>
  <el-card class="h-80 w-11/12">
    <h2>选择题</h2>
    <p>{{ mcqQuestion }}</p>
    <el-radio-group v-model="userAnswer">
      <el-radio v-for="(option, key) in mcqOptions" :key="key" :label="key"
        >{{ key }}: {{ option }}</el-radio
      >
    </el-radio-group>
    <el-button @click="checkAnswer">提交答案</el-button>
    <p v-if="answerResult">{{ answerResult }}</p>
    <el-button @click="getNewMCQ">下一题</el-button>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { generateMCQ } from "../../api/mcq";

import { useControlStore } from "../../stores/control";
const controlStore = useControlStore();

const mcqQuestion = ref("");
const mcqOptions = ref({});
const userAnswer = ref("");
const answerResult = ref("");
const mcqAnswer = ref("");
const mcqExplanation = ref("");

const getNewMCQ = async () => {
  const data = await generateMCQ(controlStore.grade, "随机主题");
  mcqQuestion.value = data.question;
  mcqOptions.value = data.options;
  mcqAnswer.value = data.answer;
  mcqExplanation.value = data.explanation;
  userAnswer.value = "";
  answerResult.value = "";
};

const checkAnswer = () => {
  if (userAnswer.value === mcqAnswer.value) {
    answerResult.value = "回答正确";
  } else {
    answerResult.value = `回答错误，正确答案是 ${mcqAnswer.value}`;
  }
};

onMounted(() => {
  getNewMCQ();
});
</script>
