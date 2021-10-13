<template>
  <div :class="`${cssPrefix}`">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'home';
export default defineComponent({
  name: 'Home',
  components: {
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>
