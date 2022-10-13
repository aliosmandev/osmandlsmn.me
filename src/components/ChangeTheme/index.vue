<template>
  <div class="flex justify-center mt-6">
    <button class="p-4 bg-white dark:bg-gray-800 rounded-full text-custom dark:text-darkTertiary" @click="changeTheme">
      <Icon name="moon" :size="30" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Icon from "../Common/Icon/index.vue";

const changeTheme = () => {
  const theme = localStorage.getItem("theme");

  if (!theme || theme === "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }
};

onMounted(() => {
  const theme = localStorage.getItem("theme");

  if (!theme || theme === "dark") {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  }
});
</script>
