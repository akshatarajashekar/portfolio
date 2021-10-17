<template>
  <div :class="`${cssPrefix}__container`">
  <div :class="`${cssPrefix}__text_property`">{{content}}</div>
  </div>
</template>
<style lang="scss">
.button {
  &__container {
    height: 34px;
    width: 92px;
    border: 2px solid #24b3a2;
    border-radius: 25px;
    background: #24b3a2;
    display: flex;
    justify-content: center;
    align-items: center;
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
const cssPrefix = 'button';
export default defineComponent({
  name: 'Button',
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