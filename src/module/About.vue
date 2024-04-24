<template>
  <div :class="`${cssPrefix}`">
    <div :class="`${cssPrefix}__container`">
      <h2 :class="`${cssPrefix}__container-header`">About Me</h2>
      <div :class="`${cssPrefix}__container-description`">
        Passionate software developer with 5 + years' experience in web development. Worked across multiple projects and
        teams and delivered projects on time. Aspiring to combine all technical skills to excel as a full stack developer. Eager to
        learn new technologies.
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