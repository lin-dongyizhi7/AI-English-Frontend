<template>
  <el-card class="h-80 w-11/12">
    <h2 class="mb-2">选择题</h2>
    <p>{{ mcqQuestion }}</p>
    <ul class="mt-2 mb-4">
      <li class="mt-1 mb-1" v-for="(option, key) in mcqOptions" :key="key">
        {{ key }}: {{ option }}
      </li>
    </ul>
    <div class="mb-2 font-bold">答案: {{ mcqAnswer }}</div>
    <div class="mb-2">解析: {{ mcqExplanation }}</div>
    <div>
      <el-button @click="copyMCQResult">复制结果</el-button>
      <el-button @click="getNewMCQ">下一题</el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { generateMCQ } from "../../api/mcq";

import { useControlStore } from "../../stores/control";
const controlStore = useControlStore();

const mcqQuestion = ref("");
const mcqOptions = ref({});
const mcqAnswer = ref("");
const mcqExplanation = ref("");

const getNewMCQ = async () => {
  const data = await generateMCQ(controlStore.grade, "随机主题");
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

onMounted(() => {
  getNewMCQ();
});
</script>
