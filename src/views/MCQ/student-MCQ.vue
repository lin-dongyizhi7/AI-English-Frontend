<template>
  <el-card class="h-80 w-11/12">
    <h2 class="mb-2">选择题</h2>
    <p>{{ mcqQuestion }}</p>
    <div class="mt-2 mb-4">
      <el-radio-group v-model="userAnswer">
        <el-radio v-for="option in mcqOptions" :key="option.index" :label="option.text" :value="option.index"
          >{{ option.index }}: {{ option.text }}</el-radio
        >
      </el-radio-group>
    </div>
    <el-button @click="checkAnswer">提交答案</el-button>
    <div class="mt-2 mb-2" v-if="answerResult">
      <div class="font-bold" :class="resultClass">{{ answerResult }}</div>
      <div class="mt-1">{{ mcqExplanation }}</div>
    </div>
    <el-button @click="getNewMCQ">下一题</el-button>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import type { optionProp } from "../../interface";
import { generateMCQ } from "../../api/mcq";

import { useControlStore } from "../../stores/control";
const controlStore = useControlStore();

const mcqQuestion = ref("");
const mcqOptions = ref<optionProp[]>([]);
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

const resultClass = ref();

const checkAnswer = () => {
  if (userAnswer.value === mcqAnswer.value) {
    answerResult.value = "回答正确";
    resultClass.value = "text-emerald-500";
  } else {
    answerResult.value = `回答错误，正确答案是 ${mcqAnswer.value}`;
    resultClass.value = "text-red-500";
  }
};

onMounted(() => {
  getNewMCQ();
});
</script>
