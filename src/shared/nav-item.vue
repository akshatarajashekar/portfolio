<template>
  <div :class="`${cssPrefix}__container`">
  <div :class="`${cssPrefix}__text_property`">{{content}}</div>
  </div>
</template>
<style lang="scss">
.nav-item {
  &__container {
    height: 34px;
    display: flex;
    justify-content: center;
    padding: 0 6px;
    align-items: center;
    border-bottom: 3px solid #24b3a2;
    cursor: pointer;
  }
  &__text_property {
    color: white;
    font-size: 16px;
    font-family: "Open Sans";
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'nav-item';
export default defineComponent({
  name: 'NavItem',
  props:[
    'content',
  ],
  components: {
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>