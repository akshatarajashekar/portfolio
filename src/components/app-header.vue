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
         <div :class="`${cssPrefix}__mode-icon`"> 
          <!-- <font-awesome-icon icon="sun" @click="changeMode('dark')" v-if="modeSelected === 'light'"/>
          <font-awesome-icon icon="moon" @click="changeMode('light')" v-if="modeSelected === 'dark'"/> -->

          <img src="../assets/svg/sun.svg" alt="sun"  @click="changeMode('dark')"  v-if="modeSelected === 'light'">
          <img src="../assets/svg/moon.svg" alt="moon" @click="changeMode('light')" v-if="modeSelected === 'dark'">
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
  &__mode-icon {
    width: 16px;
    height: 16px;
    cursor: pointer;
    padding: 21px 0 0 6px;
  }
}
.sunColor {
  fill: red;
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
    let modeSelected = 'light';
    return {
      cssPrefix,
      routeSelected,
      modeSelected,
    };
  },
  methods: {
    navigateTo(path: string) {
      this.routeSelected = path;
      router.push({ name: path });
    },
    changeMode(mode: string) {
      this.modeSelected = mode;
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

