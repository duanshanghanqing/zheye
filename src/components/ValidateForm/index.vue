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

type ValidateFunc = () => boolean;

export default defineComponent({
    name: 'ValidateForm',
    emits: ['form-submit'],
    setup(props, context) {
        let funcArray: ValidateFunc[] = [];

        // 点击按钮触发
        const submitForm = () => {
            const result: boolean = funcArray.map(fuunc => fuunc()).every( item => item); // 数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
            context.emit('form-submit', result);// 触发父组件事件
        }
        
        const callback = (func) => { // 发现 Handler 这个类型中 event 参数是可选的。https://shimo.im/docs/YT9cdpDcKKCWV3CX/read
            funcArray.push(func);
        }
        emitter.on('form-item-created', callback);
        // 卸载组件，移除事件
        onUnmounted(() => {
            emitter.off('form-item-created', callback);
            funcArray = [];
        });
        return {
            submitForm,
        }
    }
});
</script>
