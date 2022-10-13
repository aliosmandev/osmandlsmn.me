<template>
  <div class="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-4 md:gap-x-4 mt-6 max-w-lg mx-auto sm:max-w-xl">
    <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
  </div>
</template>

<script lang="ts" setup>
import projects from "@/data/projects"
import ProjectCard from "./ProjectCard.vue";
</script>
