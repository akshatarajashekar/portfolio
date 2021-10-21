<template>
  <div :class="[`${cssPrefix}`]">
    <div :class="[`flex-box`]">
      <div :class="['flex-box-right']">
        <div :class="`${cssPrefix}__nav-element`">
          <NavItem :content="'Home'" :activeNav="routeSelected === 'Home'" @click="navigateTo('Home')" ></NavItem>
        </div>
        <div :class="`${cssPrefix}__nav-element`">
          <NavItem :content="'About'" :activeNav="routeSelected === 'About'"  @click="navigateTo('About')" ></NavItem>
        </div>
        <div :class="`${cssPrefix}__nav-element`">
          <NavItem :content="'Projects'" :activeNav="routeSelected === 'Projects'"  @click="navigateTo('Projects')" ></NavItem>
        </div>
        <div :class="`${cssPrefix}__nav-element`">
          <NavItem :content="'Contact'" :activeNav="routeSelected === 'Contact'"  @click="navigateTo('Contact')" ></NavItem>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.app-header {
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
    display: inline-flex;
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
    let routeSelected = '';
    return {
      cssPrefix,
      routeSelected,
    };
  },
  methods: {
    navigateTo(path: string) {
      this.routeSelected = path;
      router.push({ name: path });
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

