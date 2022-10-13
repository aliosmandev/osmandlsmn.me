<template>
  <icomoon :iconSet="iconSet" v-bind="$props" />
</template>

<script lang="ts">
import { Icomoon } from "vue-icomoon";
import iconSet from "@/icons/selection.json";

export default {
  name: "Icon",
  components: { Icomoon },
  setup() {
    return {
      iconSet,
    };
  },
};
</script>
