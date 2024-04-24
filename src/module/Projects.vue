<template>
  <div  :class="`${cssPrefix}`">
    <div  v-for="item in projectList" :key="item.id">
      <a :class="`${cssPrefix}_container`" :href="`${item.link}`" target="_blank">
        <p :class="`${cssPrefix}_label`">{{item.label}}</p>
        <div :class="`${cssPrefix}_lower_title`">
          <span :class="`${cssPrefix}_language_color`" :style="{'background-color': `${item.color}` }"></span><span :class="`${cssPrefix}_small-label`">{{item.language}}</span>
        </div>
      </a>
      
    </div>
  </div>
</template>
<style lang="scss">
.projects {
  display: flex;
  flex-direction: row;
  &_container {
    text-decoration: none;
    cursor: pointer;
    border: 1px solid #bbbbbb;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 150px;
    margin-right: 30px;
    padding: 20px;
    border-radius: 10px;
    color: unset;
    transition: box-shadow;
  }
  &_container:hover {
  box-shadow: 0 0 25px rgba(33,33,33,.2); 
}
  // &_container: :focus 
  &_label {
    height: 150px;
    font-size: 1rem;
  }
  &_lower_title {
    border-top: 1px solid  #bbbbbb;
    padding-top: 10px;
    padding-left: 5px;
  }
  &_small-label {
    color: #767676;
    font-size: 0.80rem;
    font-weight: 700;
  }
  &_language_color {
    width: 15px;
    height: 15px;
    border-radius: 25px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
const cssPrefix = 'projects'
const projectList = [{
  name: 'carousel',
  id: 'carousel_id',
  label: 'Carousel',
  language: 'TypeSript',
  icon: '',
  color: '#3178c6',
  link: 'https://github.com/akshatarajashekar/carousel'
}, {
  name: 'blog',
  id: 'blog_id',
  label: 'Blog',
  language: 'Angular',
  icon: '',
  color: '#c3002f',
  link: 'https://github.com/akshatarajashekar/blog'
}, {
  name: 'React User Authentication',
  id: 'react-user-authentication_id',
  label: 'React User Authentication',
  language: 'React',
  icon: '',
  color: '#087ea4',
  link: 'https://github.com/akshatarajashekar/react-user-authentication'
}];
export default defineComponent({
  name: 'Projects',
  components: {
  },
  data() {
    return {
      cssPrefix, projectList
    };
  },
  
});
</script>