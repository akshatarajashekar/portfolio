<template>
  <AppHeader/>

</template>
<style lang="scss">
</style>
<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import AppHeader from './app-header.vue';
import AppFooter from './app-footer.vue';

const cssPrefix = 'app-main';

@Component({
  components: {
    AppHeader,
    AppFooter,
  },
})
export default class AppMain extends Vue {
  cssPrefix = cssPrefix;
}
</script>