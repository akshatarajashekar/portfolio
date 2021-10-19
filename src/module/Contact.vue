<template>
  <div :class="`${cssPrefix}`">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'contact';
export default defineComponent({
  name: 'Contact',
  components: {
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>