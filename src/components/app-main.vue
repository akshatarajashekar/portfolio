<template>
  <div :class="`${cssPrefix}`">
    <ScrollBar>
    <div :class="[`${cssPrefix}__container`, selectedTheme === 'light' ? `${cssPrefix}__light_theme` : `${cssPrefix}__dark_theme`]">
    <app-header></app-header>
    <router-view/>
    </div>
    </ScrollBar>
  </div>
</template>
<style scoped lang="scss">
.app-main {
  &__light_theme {
    background-color: #ffffff;
    color: #000000;
  }
  &__dark_theme {
    background-color: #17223B;
    color: #ffffff;
  }
  
  height: 100vh;
  font-family: 'Open Sans';
  &__container {
    padding: 0px 40px 0 40px;
  }
}
</style>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import AppHeader from './app-header.vue';
import ScrollBar from '../shared/scroll-bar.vue';
import { mapGetters } from 'vuex';

const cssPrefix = 'app-main';

export default defineComponent({
  name: 'AppMain',
  components: { AppHeader, ScrollBar },
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters('coreStoreModule', ['selectedTheme'])
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

