<template>
  <div class="mt-20 mb-8 flex flex-col gap-y-4">
    <img
      src="/march7th.jpg"
      alt="Welcome Logo"
      style="width: 320px; height: auto; display: block; margin: 0 auto"
    />
    <div class="font-bold font-mono text-6xl">欢迎来到英语乐园</div>
  </div>
  <div>
    <el-button type="primary" size="large" @click="goStart">进入</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

import { useControlStore } from "../../stores/control";
const controlStore = useControlStore();

const router = useRouter();

const goStart = () => {
  if (controlStore.mode === "teacher") {
    router.push("/teacher");
  } else {
    router.push("/student");
  }
};
</script>
<style lang="less" scoped>
.top-button {
  position: absolute;
  top: 0.2rem;
  right: 0.4rem;
}
</style>
