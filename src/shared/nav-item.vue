<template>
<div :class="`${cssPrefix}__body`">
  <a :class="[`${cssPrefix}__container`, activeNav ? `${cssPrefix}__container-active` : '']">
    <span :class="[`${cssPrefix}__text_property`]">{{content}}</span>
  </a>
</div>
</template>
<style lang="scss">
.nav-item {
  &__body {
    height: 80px;;
  }
  &__container {
    width: 60px;;
    height: 34px;
    display: flex;
    justify-content: center;
    padding: 0 6px;
    align-items: center;
    
    cursor: pointer;
    margin: 10px 10px;
    &-active {
      border-bottom: 3px solid #24b3a2;
    }
  }
  &__text_property {
    color: white;
    font-size: 16px;
    font-family: "Open Sans";
  }
  
}
.nav-item__container:hover {
  // width: 60px;
  // background: #24b3a2;
  // border-radius: 50%;
  // height: 60px;
  // margin: 0 10px;
  border-bottom: 3px solid #24b3a2;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'nav-item';
export default defineComponent({
  name: 'NavItem',
  props:[
    'content',
    'activeNav',
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