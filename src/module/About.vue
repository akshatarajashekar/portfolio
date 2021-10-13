<template>
  <div :class="`${cssPrefix}`">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'about';
export default defineComponent({
  name: 'About',
  components: {
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>