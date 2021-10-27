<template>
<div :class="`${cssPrefix}__body`">
  <div :class="[`${cssPrefix}__container`, activeNav ? `${cssPrefix}__container-active` : '', selectedTheme === 'light' ? `${cssPrefix}__light_theme` : `${cssPrefix}__dark_theme`]">
    <h2 :class="[`${cssPrefix}__text_property`]">{{content}}</h2>
  </div>
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
    font-weight: 300;;
    font-size: 20px;
    font-family: "Open Sans";
  }
  &__light_theme {
    color: #000000;
  }
  &__dark_theme {
    color: #ffffff;
  }
}
.nav-item__container:hover {
  border-bottom: 3px solid #24b3a2;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

const cssPrefix = 'nav-item';
export default defineComponent({
  name: 'NavItem',
  props:[
    'content',
    'activeNav',
  ],
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