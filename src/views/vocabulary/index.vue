<template>
  <div class="mt-2 mb-4">
    <el-button @click="goHome">返回首页</el-button>
  </div>
  <div class="flex justify-center">
    <el-card class="h-80 w-11/12">
      <h2 class="mb-2">单词默写</h2>
      <p v-if="vocabularyQuestion">{{ vocabularyQuestion }}:</p>
      <div class="mt-2 mb-4">
        <el-input
          v-if="vocabularyQuestion"
          v-model="userVocabularyAnswer"
          type="text"
        ></el-input>
      </div>
      <el-button v-if="vocabularyQuestion" @click="checkVocabularyAnswer"
        >提交答案</el-button
      >
      <p class="m-1" v-if="vocabularyAnswerResult">{{ vocabularyAnswerResult }}</p>
      <el-button v-if="flag || tryTimes === 3" @click="getNextWord">下一个单词</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { generateVocabularyList } from "../../api/vocabulary";

import { useRouter } from "vue-router";
const router = useRouter();

import { useControlStore } from "../../stores/control";
const controlStore = useControlStore();

const goHome = () => {
  router.push("/");
};

const vocabularyQuestion = ref("");
const userVocabularyAnswer = ref("");
const correctWord = ref("");
const vocabularyAnswerResult = ref("");
const flag = ref(false);
const tryTimes = ref(0);

const wordList = ref([]);
const wordNum = ref(0);
const wordIndex = ref(0);

const nextWord = () => {
  if (wordIndex.value === 9) {
    getNewVocabularyList();
  } else {
    getNextWord();
  }
};

const getNextWord = () => {
  vocabularyQuestion.value = wordList.value[wordIndex.value].meaning;
  correctWord.value = wordList.value[wordIndex.value].word;
  userVocabularyAnswer.value = "";
  vocabularyAnswerResult.value = "";
  wordNum.value += 1;
  wordIndex.value += 1;
  flag.value = false;
  tryTimes.value = 0;
};

const getNewVocabularyList = async () => {
  wordIndex.value = 0;
  const data = await generateVocabularyList(controlStore.grade);
  if (!data) return;
  wordList.value = data;
  getNextWord();
};

const checkVocabularyAnswer = () => {
  if (userVocabularyAnswer.value === vocabularyQuestion.value) {
    vocabularyAnswerResult.value = "回答正确";
    flag.value = true;
  } else {
    flag.value = false;
    tryTimes.value++;
    if (tryTimes.value === 3) {
      vocabularyAnswerResult.value = `回答错误，正确答案是 ${vocabularyQuestion.value}`;
    } else {
      vocabularyAnswerResult.value = `回答错误`;
    }
  }
};

onMounted(() => {
  getNewVocabularyList();
});
</script>
