<template>
  <div :class="`${cssPrefix}`">

  </div>
</template>
<style scoped lang="scss">
.app-header {

}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'app-header';

export default defineComponent({
  name: 'AppHeader',
  props: {
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

