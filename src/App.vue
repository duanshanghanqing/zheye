<template>
  <div>
    <button @click="increase">
      <!-- vue 内部对 count 做了处理，能直接使用-->
      Clicked {{ count }} times.
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
// 1
export default defineComponent({
  // 访问不到this
  setup () {
    const count = ref(0) // 返回一个响应式对象
    const increase = () => {
      count.value++
    }
    // computed: 计算方法，内部依赖的值变了返回新值
    const double = computed(() => {
      return count.value * 2
    })
    return {
      count,
      double,
      increase
    }
  }
})
</script>

<style scoped>
  h2 {
    color: aqua;
  }
</style>

<style scoped lang="less" rel="stylesheet/less">
@import "./assets/less/app.less";
  h2 {
    font-weight: bold;
    background-color: rgb(32, 163, 119);
  }
</style>
