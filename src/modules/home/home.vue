<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
  </div>
</template>
<style lang="scss">
.home {
  margin: 40px 0 0;
}
</style>
<script>
import Vue from 'vue';

const cssPrefix = 'home';

export default class Home extends Vue {
  cssPrefix = cssPrefix;
}
</script>
