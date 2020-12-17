<template>
  <validate-form @form-submit="onFormSubmit">
    <validate-input
      type="text"
      label="邮箱地址"
      :rules="emailRules"
      v-model="formValue.emailValue"
      placeholder="请输入"
    />
    <validate-input
      type="password"
      label="密码"
      :rules="passwordRules"
      v-model="formValue.passwordValue"
      placeholder="请输入"
    />
    <template v-slot:submit>
      <button type="submit" class="btn btn-primary">提交</button>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ValidateForm from '../../components/ValidateForm/index.vue';
import ValidateInput, {
  RulesProp,
} from '../../components/ValidateForm/ValidateInput/index.vue';

export default defineComponent({
  name: 'Login',
  setup() {
    const formValue = reactive({
      emailValue: '',
      passwordValue: '',
    });

    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '电子邮箱不能为空',
      },
      {
        type: 'email',
        message: '请输入正确的电子邮箱格式',
      },
    ];
    const passwordRules: RulesProp = [
      {
        type: 'required',
        message: '密码不能为空',
      },
    ];
    const onFormSubmit = (result: boolean) => {
      console.log('result', result);
    };

    return {
      formValue,
      emailRules,
      passwordRules,
      onFormSubmit,
    };
  },
  components: {
    ValidateForm,
    ValidateInput,
  },
});
</script>
