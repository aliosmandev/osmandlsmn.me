<template>
  <div class="h-[226px] w-full rounded group">
    <figure
      class="relative overflow-hidden w-full h-full rounded-2xl bg-black/10 transition-all group-hover:bg-darkPrimary/70">
      <img class="h-full w-full group-hover:blur-sm group-hover:opacity-40"
        :src="'/images/projects/' + project.image" />
      <div class="absolute w-full top-1/2 transform -translate-y-1/2 text-center hidden group-hover:block text-white">
        <h3 class="font-bold text-lg">{{ project.name }}</h3>
        <p class="text-sm">{{ project.description }}</p>
        <div class="mt-3 flex align-center justify-center gap-x-2">
          <a :href="project.links.preview">
            <div class="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
              <Icon class="text-custom" name="link" />
            </div>
          </a>
          <a :href="project.links.github">
            <div class="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
              <Icon class="text-custom" name="github" />
            </div>
          </a>
        </div>
      </div>
    </figure>
  </div>
</template>

<script lang="ts" setup>
import Icon from "@/components/Common/Icon/index.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
