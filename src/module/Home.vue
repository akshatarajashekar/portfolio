<template>
  <div :class="`${cssPrefix}`">
    <div  :class="`${cssPrefix}__body`">
      <div :class="`${cssPrefix}__body_container`">
        <div :class="`${cssPrefix}__description_container`">
        <div :class="`${cssPrefix}__description__header`">
        <h1>  Hey, I'm Akshata </h1>
        </div>
        <h2  :class="`${cssPrefix}__content`">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </h2>
        </div>
      </div>
      <div :class="`${cssPrefix}__aboutme`">
        <div :class="`${cssPrefix}__aboutme__container`">
          <h2 :class="`${cssPrefix}__aboutme-header`">About Me</h2>
          <div :class="`${cssPrefix}__aboutme-description`">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home {
  padding-top: 120px;
  &__body {
    padding: 20px 100px;
    &_container {
      border-left: 15px solid #24b3a2;
      padding-left: 15px;
      width: 40%;
      display: block;
    }
  }
  &__description {
    &__header h1{
    color: #24b3a2;
    font-family: "Open Sans";
  }
  }
  &__content {
    font-family: "Open Sans";
    font-weight: 300;
  }
  &__aboutme {
    padding-top: 450px;
    &__container {
    }
    &-header{
      color: #24b3a2;
    }
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
