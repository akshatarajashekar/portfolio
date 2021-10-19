<template>
  <div :class="[`${cssPrefix}`]">
    <div :class="[`flex-box`]">
      <div :class="['flex-box-left']"  @click="navigateToHome">
        <img :class="[`${cssPrefix}__home-icon`]" src="../assets/images/home.png"/>
      </div>
      <div :class="['flex-box-right']">
        <div :class="`${cssPrefix}__nav-element`">
          <NavItem :content="'About'"  @click="navigateToAbout" ></NavItem>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.app-header {
  padding: 20px 40px;
  &__home-icon {
    width: 25px;
    height: 25px;
    padding-top: 6px;
  }
  .flex-box {
    display: flex;
  }
  .flex-box-left {
    justify-content: flex-start;
  }
  .flex-box-right {
    justify-content: flex-end;
    margin-left: auto;
  }
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
import NavItem from "../shared/nav-item.vue";
import router from "@/router";

const cssPrefix = "app-header";

export default defineComponent({
  name: "AppHeader",
  components: { NavItem },
  props: {},
  data() {
    return {
      cssPrefix,
    };
  },
  methods: {
    navigateToAbout() {
      router.push({ name: "About" });
    },
    navigateToHome() {
      router.push({ name: "AppMain" });
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

