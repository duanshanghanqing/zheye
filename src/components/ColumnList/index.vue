<template>
  <div class="row">
    <div v-for="item in columnList" :key="item.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="item.avatar" :alt="item.title" />
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text text-left">
            {{ item.description }}
          </p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // 这里使用 vue 提供的PropType，把数组类型转换指定类型.把构造函数断言成其他类型添加 PropType
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    // 计算属性
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.avatar) {
          column.avatar = 'https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=485755251,1639022878&fm=74&app=80&f=PNG&size=f121,121';
        }
        return column;
      });
    });
    return {
      columnList
    }
  },
});
</script>

<style>
</style>