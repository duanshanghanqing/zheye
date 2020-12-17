<template>
  <!-- <div>{{ count > 3 }}</div>
  <div>{{ isCountLarge3 }}</div> -->
  <column-list :list="list" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import ColumnList, { ColumnProps } from '../../components/ColumnList/index.vue';
import { useStore } from 'vuex';
import { StoreState } from '../../store';

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
        const store = useStore<StoreState>(); // 加上范型有提醒
        const count = computed(() => store.state.count); // 使用 computed 将其变成响应式状态
        const isCountLarge3 = computed(() => store.getters.countLarge3);
        return {
          list,
          count,
          isCountLarge3,
        }
    },
    components: {
      ColumnList,
    }
});
</script>
