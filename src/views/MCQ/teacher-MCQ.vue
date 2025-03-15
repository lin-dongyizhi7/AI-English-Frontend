<template>
  <el-card>
    <h2>选择题</h2>
    <p>{{ mcqQuestion }}</p>
    <ul>
      <li v - for="(option, key) in mcqOptions" :key="key">{{ key }}: {{ option }}</li>
    </ul>
    <p>答案: {{ mcqAnswer }}</p>
    <p>解析: {{ mcqExplanation }}</p>
    <el-button @click="copyMCQResult">复制结果</el-button>
    <el-button @click="getNewMCQ">下一题</el-button>
  </el-card>
</template>

<script setup>
import { ref } from "vue";
import { generateMCQ } from '../../api/mcq';

const mcqQuestion = ref("");
const mcqOptions = ref({});
const mcqAnswer = ref("");
const mcqExplanation = ref("");

const getNewMCQ = async () => {
    const data = await generateMCQ('random');
    mcqQuestion.value = data.question;
    mcqOptions.value = data.options;
    mcqAnswer.value = data.answer;
    mcqExplanation.value = data.explanation;
};

const copyMCQResult = () => {
  const result = `问题: ${mcqQuestion.value}\n选项: ${JSON.stringify(
    mcqOptions.value
  )}\n答案: ${mcqAnswer.value}\n解析: ${mcqExplanation.value}`;
  navigator.clipboard
    .writeText(result)
    .then(() => {
      console.log("结果已复制到剪贴板");
    })
    .catch((error) => {
      console.error("复制失败:", error);
    });
};
</script>
