<template>
  <div :class="`${cssPrefix}`">
    <div :class="`${cssPrefix}__container`">
      <h2 :class="`${cssPrefix}__container-header`">About Me</h2>
      <div :class="`${cssPrefix}__container-description`">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.about {
  &__container {
    text-align: center;
    &-header{
      color: #24b3a2;
    }
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'about';
export default defineComponent({
  name: 'About',
  components: {
  },
  data() {
    return {
      cssPrefix,
    };
  }
});
</script>