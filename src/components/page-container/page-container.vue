<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
  </div>
</template>
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<script>
import Vue from 'vue';

const cssPrefix = 'page-container';

export default class PageContainer extends Vue {
  cssPrefix = cssPrefix;
}
</script>
