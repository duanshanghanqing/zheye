<template>
  <div class="dropdown">
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
import { defineComponent, ref } from 'vue';
import _DropdownItem from './DropdownItem/index.vue';
export const DropdownItem = _DropdownItem;

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
    }
    return {
      isOpen,
      toggleOpen
    };
  },
});
</script>

<style>
</style>