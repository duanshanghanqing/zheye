<template>
    <ul>
        <li v-for="item in list" :key="item.id">
            <img :src="item.avatar" :alt="item.title" />
            <h5>{{ item.title }}</h5>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      // 这里使用 vue 提供的PropType，把数组类型转换指定类型.把构造函数断言成其他类型添加 PropType
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup() {},
});
</script>

<style>
</style>