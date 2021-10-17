<template>
  <div :class="`${cssPrefix}`">
    <div  :class="`${cssPrefix}__body`">
      <div :class="`${cssPrefix}__body_container`">
        <h1 :class="`${cssPrefix}__header`">
          Lorem Ipsum
        </h1>
        <h2  :class="`${cssPrefix}__content`">
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </h2>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home {
  padding-top: 20px;
  &__body {
    
    padding: 20px 40px;
    &_container {
      display: block;
    }
  }
  &__header {
     display: flex;
    justify-content: center;
    font-family: "Open Sans";
  }
  &__content {
    display: flex;
    justify-content: center;
    font-family: "Open Sans";
    font-weight: 300;
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'home';
export default defineComponent({
  name: 'Home',
  components: {
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>
