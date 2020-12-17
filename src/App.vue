<template>
  <div class="container">
    <global-header :user="currentUser" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import { defineComponent, ref, computed, reactive } from 'vue';
import GlobalHeader, { UserProps } from './components/GlobalHeader/index.vue';



const currentUser: UserProps = {
  isLogin: false,
  nickName: 'xxx',
};


export default defineComponent({
  name: 'App',
  props: {},
  setup() {
    return {
      currentUser,
    };
  },
  components: {
    GlobalHeader,
  },
});
</script>

<style scoped lang="less" rel="stylesheet/less">
@import "./assets/less/app.less";
h2 {
  font-weight: bold;
  background-color: rgb(32, 163, 119);
}
</style>
