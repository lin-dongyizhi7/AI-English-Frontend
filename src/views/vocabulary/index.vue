<template>
  <div>
    <el-card>
      <h2>单词默写</h2>
      <p v-if="vocabularyQuestion">{{ vocabularyQuestion }}:</p>
      <el-input
        v-if="vocabularyQuestion"
        v-model="userVocabularyAnswer"
        type="text"
      ></el-input>
      <el-button v-if="vocabularyQuestion" @click="checkVocabularyAnswer"
        >提交答案</el-button
      >
      <p v-if="vocabularyAnswerResult">{{ vocabularyAnswerResult }}</p>
      <el-button @click="getNewVocabularyQuestion">下一个单词</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { generateVocabulary } from '../../api/vocabulary';

const vocabularyQuestion = ref("");
const userVocabularyAnswer = ref("");
const vocabularyAnswerResult = ref("");

const getNewVocabularyQuestion = async () => {
    const data = await generateVocabulary('random');
    vocabularyQuestion.value = data.word;
    userVocabularyAnswer.value = '';
    vocabularyAnswerResult.value = '';
};

const checkVocabularyAnswer = () => {
  if (userVocabularyAnswer.value === vocabularyQuestion.value) {
    vocabularyAnswerResult.value = "回答正确";
  } else {
    vocabularyAnswerResult.value = `回答错误，正确答案是 ${vocabularyQuestion.value}`;
  }
};
</script>
