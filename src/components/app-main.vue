<template>
  <div :class="`${cssPrefix}`">
    <ScrollBar>
    <div :class="`${cssPrefix}__container`">
    <app-header></app-header>
    <router-view/>
    </div>
    </ScrollBar>
  </div>
</template>
<style scoped lang="scss">
.app-main {
  
  background-color: white;
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
import { useStore } from '../store';
const cssPrefix = 'app-main';

export default defineComponent({
  name: 'AppMain',
  components: { AppHeader, ScrollBar },
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    const themeSelected = computed(() => store.getters.selectedTheme)
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

