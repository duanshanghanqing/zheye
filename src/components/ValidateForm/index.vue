<template>
    <form class="validata-form-container">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit"></slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';
import { emitter } from './mitt'; 

export { default as ValidateInput } from './ValidateInput/index.vue';

export default defineComponent({
    name: 'ValidateForm',
    emits: ['form-submit'],
    setup(props, context) {
        const submitForm = () => {
            context.emit('form-submit', true);// 触发父组件事件
        };

        const callback = (e) => {
            console.log('foo', e);
        }
        emitter.on('form-item-created', callback);
        // 卸载组件，移除事件
        onUnmounted(() => {
            emitter.off('form-item-created', callback);
        });
        return {
            submitForm,
        }
    }
});
</script>
