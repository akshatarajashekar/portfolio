<template>
  <div :class="`${cssPrefix}`">
    <app-header></app-header>
    <router-view/>
  </div>
</template>
<style scoped lang="scss">
.app-main {
  padding: 0px 40px 0 40px;
  background-color: white;
  height: 100vh;
  font-family: 'Open Sans';
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './app-header.vue';

const cssPrefix = 'app-main';

export default defineComponent({
  name: 'AppMain',
  components: { AppHeader },
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

