<template>
    <form class="validata-form-container">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit"></slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export { default as ValidateInput } from './ValidateInput/index.vue';

export default defineComponent({
    name: 'ValidateForm',
    emits: ['form-submit'],
    setup(props, context) {
        const submitForm = () => {
            context.emit('form-submit', true);// 触发父组件事件
        };
        return {
            submitForm,
        }
    }
});
</script>
