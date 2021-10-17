<template>
  <div :class="`${cssPrefix}`">
    <div  :class="`${cssPrefix}__body`">
      <div :class="`${cssPrefix}__body_container`">
        <div :class="`${cssPrefix}__header`">
          Lorem Ipsum
        </div>
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
      display: flex;
      justify-content: center;
    }
  }
  &__header {
    font-size: 15px;
    font-family: "Open Sans";
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
