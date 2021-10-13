<template>
  <div :class="`${cssPrefix}`">
      <AppHeader/>
    <router-view/>
  </div>
</template>
<style scoped lang="scss">
.app-main {
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'app-main';

export default defineComponent({
  name: 'AppMain',
  props: {
    msg: String,
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

