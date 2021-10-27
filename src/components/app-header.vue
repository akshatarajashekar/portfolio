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

          <img src="../assets/svg/sun.svg" alt="sun"  @click="changeMode('dark')"  v-if="selectedTheme === 'light'">
          <img src="../assets/svg/moon.svg" alt="moon" @click="changeMode('light')" v-if="selectedTheme  === 'dark'">
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
import { defineComponent, computed, readonly } from "vue";
import { namespace } from 'vuex-class';
import NavItem from "../shared/nav-item.vue";
import router from "@/router";
import { useStore } from '../store';
import { mapGetters } from 'vuex';
import { ThemeType } from './types';

const cssPrefix = "app-header";
export default defineComponent({
  name: "AppHeader",
  components: { NavItem },
  data() {
    let routeSelected = '';
    let modeSelected: ThemeType = 'light';
    
    return {
      cssPrefix,
      routeSelected,
      modeSelected,
    };
  },
  setup() {
    const store = useStore();
    const themeSelected: 'dark'| 'light' = store.getters['coreStoreModule/selectedTheme'];
    console.log(store, themeSelected);
    return { themeSelected };
  },
  computed: {
    ...mapGetters('coreStoreModule', ['selectedTheme'])
  },
  methods: {
    navigateTo(path: string) {
      this.routeSelected = path;
      router.push({ name: path });
    },
    changeMode(mode: ThemeType) {
      const store = useStore();
      store.dispatch('coreStoreModule/SET_ACTION_THEME', mode);
    }
    
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

