<template>
  <div class="grid grid-cols-3 mt-5 max-w-lg mx-auto sm:max-w-3xl md:gap-x-6 md:grid-cols-4">
    <div v-for="skill in skills" :key="skill.name">
      <Tippy :content="skill.name">
        <img width="190" :src="'/images/skills/' + skill.image" :alt="skill.name" />
      </Tippy>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Tippy } from 'vue-tippy'
import skills from "@/data/skills";
</script>
