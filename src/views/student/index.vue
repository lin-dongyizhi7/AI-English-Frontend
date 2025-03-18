<template>
  <div class="flex flex-col gap-y-3 items-center mt-10">
    <div>
      <el-button @click="goHome">返回首页</el-button>
    </div>
    <div>
      <el-button type="success" size="large" @click="goToVocabulary">背单词</el-button>
    </div>
    <div>
      <el-button type="success" size="large" @click="goToMCQ">选择题</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToVocabulary = () => {
  router.push("/vocabulary");
};

const goToMCQ = () => {
  router.push("/mcq");
};

const goHome = () => {
  router.push("/");
};
</script>
