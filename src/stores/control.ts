// src/stores/control.ts
import { defineStore } from "pinia";
import type { ModeType } from "../types/control";

export const useControlStore = defineStore("control", {
  state: () => ({
    mode: localStorage.getItem("mode") || 'student', // 从本地存储获取 token，如果没有则为 null
  }),
  actions: {
    setMode(mode: ModeType) {
      if (!mode) return;
      this.mode = mode;
      localStorage.setItem("mode", mode); // 同时存储到本地存储
    },
  },
});
