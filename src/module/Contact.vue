<template>
  <div :class="`${cssPrefix}`">
    <div  :class="`${cssPrefix}__body`">
      <div :class="`${cssPrefix}__body_container`">
        <div :class="`${cssPrefix}__description_container`">
          <h2  :class="`${cssPrefix}__content`">
            Leave Message
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .contact {
    color: white;
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
const cssPrefix = 'contact';
export default defineComponent({
  name: 'Contact',
  components: {
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>