<template>
    <form>
        <validate-input
            type="text"
            label="邮箱地址"
            :rules="emailRules"
            v-model="formValue.emailValue"
            placeholder="请输入"
        />
        <div>{{ formValue.emailValue }}</div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import ValidateInput, { RulesProp } from './ValidateInput/index.vue';

export default defineComponent({
    name: 'Form',
    setup() {
        const formValue = reactive({
            emailValue: '',
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
        return {
            formValue,
            emailRules,
        };
    },
    components: {
        ValidateInput,
    },
});
</script>
