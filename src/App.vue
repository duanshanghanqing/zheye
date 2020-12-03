<template>
  <div class="container">
    <column-list :list="list"/>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import { defineComponent, ref, computed } from 'vue';
import ColumnList, { ColumnProps } from './components/ColumnList/index.vue';
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1',
    description: 'xxxx',
    avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
  },
  {
    id: 2,
    title: 'test2',
    description: 'xxxx',
    // avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
  },
  {
    id: 3,
    title: 'test3',
    description: 'xxxx',
    avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
  },
  {
    id: 4,
    title: 'test4',
    description: 'xxxx',
    avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
  },
];

export default defineComponent({
  name: 'App',
  props: {},
  setup() {
    const list = ref(testData);
    return {
      list,
    };
  },
  components: {
    ColumnList,
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
