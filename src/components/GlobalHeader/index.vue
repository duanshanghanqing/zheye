<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#"> 者也专栏 </a>
    <!-- 未登陆 -->
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2">登陆</router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="/signup" class="btn btn-outline-light my-2">注册</router-link>
      </li>
    </ul>
    <!-- 已登陆 -->
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`你好 ${user.nickName}`">
            <dropdown-item>
                <router-link to="/" class="dropdown-item">首页</router-link>
            </dropdown-item>
            <dropdown-item>
                <router-link to="/login" class="dropdown-item">登录</router-link>
            </dropdown-item>
          <dropdown-item disabled>
            <a class="dropdown-item" href="#">Another action</a>
          </dropdown-item>
        </dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Dropdown, { DropdownItem } from '../Dropdown/index.vue';
export interface UserProps {
  isLogin: boolean;
  name?: string;
  nickName?: string;
  id?: number;
}

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  components: {
      Dropdown,
      DropdownItem,
  }
});
</script>

<style>
</style>