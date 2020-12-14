<template>
    <div class="mb-3">
      <label class="form-label">{{ label }}</label>
      <!-- 2.使用手动更新 -->
      <input
        type="text"
        class="form-control"
        :class="{'is-invalid': inputRef.error}"
        :value="inputRef.val"
        @blur="validata"
        @input="upDataValue"
        v-bind="$attrs"
      />
      <!-- b. v-bind="$attrs": 结束属性上html原始属性 -->
      <div class="invalid-feedback" v-if="inputRef.error">
        {{ inputRef.message }}
      </div>
    </div>
</template>

<script lang="ts">
// https://getbootstrap.net/docs/components/forms/#server-side
import { defineComponent, reactive, PropType } from 'vue';

interface RuleProp {
  type: 'required' | 'email';
  message: string;
}

export type RulesProp = RuleProp[];

export default defineComponent({
  props: {
    label: {
        type: String,
        // default: '',
        required: true
    },
    rules: Array as PropType<RulesProp>,
    modelValue: String, // 1.要有一个 modelValue 属性
  },
  inheritAttrs: false,// a.不希望根节点继承传入的属性
  setup(props, context) {// 发送事件 context
    const inputRef = reactive({
      val: props.modelValue || '', // 设置默认值
      error: false,
      message: '',
    });
    const validata = () => {
        if (props.rules) {
            const allError = props.rules.every(rule => {// 有一个为false结果就为false
                let error = true;
                inputRef.message = rule.message;
                switch(rule.type) {
                    case 'required':
                        error = inputRef.val.trim() !== '';
                        break;
                    case 'email':
                        const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                        error = emailReg.test(inputRef.val);
                        break;
                    default:
                        break;
                }
                return error;
            });
            inputRef.error = !allError;
        }
    };
    const upDataValue = (e: KeyboardEvent) => {
        const targetValue = (e.target as HTMLInputElement).value;
        // 更新组件内部表单的值
        inputRef.val = targetValue;
        // 发射事件，通知外部
        context.emit('update:modelValue', targetValue); // 3.更新某个属性值
    };
    return {
        inputRef,
        validata,
        upDataValue,
    }
  },
});
</script>

<style>
</style>