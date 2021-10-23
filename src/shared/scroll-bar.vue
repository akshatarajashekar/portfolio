<template>
  <div :class="[`${cssPrefix}`]">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.scroll-bar {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.scroll-bar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}
.scroll-bar::-webkit-scrollbar {
  width: 8px;
  background-color: #F5F5F5;
}
.scroll-bar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #5555555c;
}
.scroll-bar::-moz-scrollbar-track {
  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}
.scroll-bar::-moz-webkit-scrollbar {
  width: 8px;
  background-color: #F5F5F5;
}
.scroll-bar::-moz-webkit-scrollbar-thumb {
  border-radius: 10px;
 -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #5555555c;
}

</style>
<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'scroll-bar';
export default defineComponent({
  name: 'ScrollBar',
  components: {
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>