<template>
  <div>
    <student-MCQ v-if="mode === 'student'" />
    <teacher-MCQ v-if="mode === 'teacher'" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import StudentMCQ from "./student-MCQ.vue";
import TeacherMCQ from "./teacher-MCQ.vue";

const mode = computed(() => props.mode);
const props = defineProps({
  mode: {
    type: String,
    required: true,
  },
});
</script>
