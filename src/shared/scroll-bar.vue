<template>
  <div :class="[`${cssPrefix}`,  selectedTheme === 'light' ? `${cssPrefix}__light_theme` : `${cssPrefix}__dark_theme`]">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.scroll-bar {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.scroll-bar__light_theme::-webkit-scrollbar-track {
  // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); // to remove background
  border-radius: 10px;
  background-color: #ffffff;
}
.scroll-bar__dark_theme::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #17223B;
}
.scroll-bar__light_theme::-webkit-scrollbar {
  width: 8px;
  background-color: #ffffff;
}
.scroll-bar__dark_theme::-webkit-scrollbar {
  width: 8px;
  background-color: #17223B;
}
.scroll-bar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #5555555c;
}
.scroll-bar__light_theme::-moz-scrollbar-track {
  // -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #ffffff;
}
.scroll-bar::-moz-scrollbar-track {
  border-radius: 10px;
  background-color: #17223B;
}
.scroll-bar__light_theme::-moz-webkit-scrollbar {
  width: 8px;
  background-color: #ffffff;
}
.scroll-bar__dark_theme::-moz-webkit-scrollbar {
  width: 8px;
  background-color: #17223B;
}
.scroll-bar::-moz-webkit-scrollbar-thumb {
  border-radius: 10px;
 -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #5555555c;
}

</style>
<script lang="ts">
import { defineComponent } from 'vue';

import { mapGetters } from 'vuex';
const cssPrefix = 'scroll-bar';
export default defineComponent({
  name: 'ScrollBar',
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