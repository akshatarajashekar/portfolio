<template>
  <div :class="`${cssPrefix}`">
    <div  :class="`${cssPrefix}__body`">
      <div :class="`${cssPrefix}__body_container`">
        <div :class="`${cssPrefix}__description_container`">
        <div :class="`${cssPrefix}__description__header`">
        <h1>  Hey, I'm Akshata </h1>
        </div>
        <h2  :class="`${cssPrefix}__content`">
          Software developer in Bangalore
        </h2>
        </div>
      </div>
      <div :class="`${cssPrefix}__aboutme`">
        <div :class="`${cssPrefix}__aboutme__container`">
          <h2 :class="`${cssPrefix}__aboutme-header`">About Me</h2>
          <div :class="`${cssPrefix}__aboutme-description`">
            Passionate software developer with 5 + years' experience in web development. Worked across multiple projects and
        teams and delivered projects on time. Aspiring to combine all technical skills to excel as a full stack developer. Eager to
        learn new technologies.
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
