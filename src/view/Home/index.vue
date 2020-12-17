<template>
  <column-list :list="list" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ColumnList, { ColumnProps } from '../../components/ColumnList/index.vue';

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
    name: 'Home',
    setup() {
        const list = ref(testData);
        return {
          list,
        }
    },
    components: {
      ColumnList,
    }
});
</script>
