<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      class="btn btn-primary dropdown-toggle"
      href="#"
      role="button"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      @click.prevent="toggleOpen"
    >
      Dropdown link
    </a>
    <ul
      class="dropdown-menu"
      aria-labelledby="dropdownMenuLink"
      style="display: block"
      v-if="isOpen"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"; // onMounted, onUnmounted
import _DropdownItem from "./DropdownItem/index.vue";
export const DropdownItem = _DropdownItem;
import useClickOutside from "../../hooks/useClickOutside/index";

export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    const dropdownRef = ref<null | HTMLElement>(null);
    const isClickOutside = useClickOutside(dropdownRef);
    watch(isClickOutside, () => { // 因为 hooks 返回的是个响应式对象
      // 点击的区域不再组件内，并且默认展开
      if (!isClickOutside.value && isOpen.value) {
        isOpen.value = false;
      }
    });

    // const handler = (e: MouseEvent) => {
    //   // 拿到dom节点
    //   if (dropdownRef.value) {
    //     // 判断点击的节点是否包含当前组件内，在就不处理，不再就关闭
    //     if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen) { // 点击的html元素不在当前组件内，并且菜单展开
    //       isOpen.value = false;
    //     }
    //   }
    // }
    // onMounted(() => {
    //   document.addEventListener('click', handler);
    // });
    // onUnmounted(() => {
    //   document.removeEventListener('click', handler);
    // });
    return {
      isOpen,
      toggleOpen,
      dropdownRef, // 这里返回要和上面html定义的ref一样
    };
  },
});
</script>

<style>
</style>