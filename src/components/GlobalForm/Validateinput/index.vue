<template>
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <input
        type="email"
        class="form-control"
        v-model="emailRef.val"
        @blur="validataEmail"
      />
      <div class="form-text" v-if="emailRef.error">
        {{ emailRef.message }}
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue';

const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

interface RuleProp {
  type: 'required' | 'email';
  message: string;
}

export type RulesProp = RuleProp[];

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
  },
  setup() {
    const emailRef = reactive({
      val: '',
      error: false,
      message: '',
    });
    const validataEmail = () => {
      const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (emailRef.val.trim() === '') {
        emailRef.error = true;
        emailRef.message = '不能为空';
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true;
        emailRef.message = '不是合法的邮箱';
      }
    };
    return {
        emailRef,
        validataEmail,
    }
  },
});
</script>

<style>
</style>