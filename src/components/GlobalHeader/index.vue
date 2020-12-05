<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#"> 者也专栏 </a>
    <!-- 为登陆 -->
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <!-- <router-link to="/login" class="btn btn-outline-light my-2">登陆</router-link> -->
      </li>
      <li class="list-inline-item">
        <!-- <router-link to="/signup" class="btn btn-outline-light my-2">注册</router-link> -->
      </li>
    </ul>
    <!-- 已登陆 -->
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`你好 ${user.nickName}`">
          <dropdown-item>
            <a class="dropdown-item" href="#">Action</a>
          </dropdown-item>
          <dropdown-item disabled>
            <a class="dropdown-item" href="#">Another action</a>
          </dropdown-item>
          <dropdown-item>
            <a class="dropdown-item" href="#">Something else here</a>
          </dropdown-item>
          <!-- <dropdown-item><router-link to="/create" class="dropdown-item">新建文章</router-link></dropdown-item>
          <dropdown-item><router-link :to="`/column/${user.column}`" class="dropdown-item">我的专栏</router-link></dropdown-item>
          <dropdown-item disabled><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
          <dropdown-item><a href="#" class="dropdown-item">退出登陆</a></dropdown-item> -->
        </dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown, { DropdownItem } from '../Dropdown/index.vue';
export interface UserProps {
  isLogin: boolean;
  name?: string;
  nickName?: string;
  id?: number;
}

export default defineComponent({
  name: "GlobalHeader",
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