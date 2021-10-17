<template>
  <div :class="`${cssPrefix}`">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'projects';
export default defineComponent({
  name: 'Projects',
  components: {
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>