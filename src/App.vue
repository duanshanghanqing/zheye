<template>
  <div class="container">
    <global-header :user="currentUser" />
    <!-- 
    <column-list :list="list" />
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
    -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import { defineComponent, ref, computed, reactive } from 'vue';
import GlobalHeader, { UserProps } from './components/GlobalHeader/index.vue';
// import ColumnList, { ColumnProps } from './components/ColumnList/index.vue';
// import ValidateForm from './components/ValidateForm/index.vue';
// import ValidateInput, {
//   RulesProp,
// } from './components/ValidateForm/ValidateInput/index.vue';

const currentUser: UserProps = {
  isLogin: false,
  nickName: 'xxx',
};
// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: 'test1',
//     description: 'xxxx',
//     avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
//   },
//   {
//     id: 2,
//     title: 'test2',
//     description: 'xxxx',
//     // avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
//   },
//   {
//     id: 3,
//     title: 'test3',
//     description: 'xxxx',
//     avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
//   },
//   {
//     id: 4,
//     title: 'test4',
//     description: 'xxxx',
//     avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
//   },
// ];

export default defineComponent({
  name: 'App',
  props: {},
  setup() {
    // const list = ref(testData);
    // const formValue = reactive({
    //   emailValue: '',
    //   passwordValue: '',
    // });

    // const emailRules: RulesProp = [
    //   {
    //     type: 'required',
    //     message: '电子邮箱不能为空',
    //   },
    //   {
    //     type: 'email',
    //     message: '请输入正确的电子邮箱格式',
    //   },
    // ];
    // const passwordRules: RulesProp = [
    //   {
    //     type: 'required',
    //     message: '密码不能为空',
    //   },
    // ];
    // const onFormSubmit = (result: boolean) => {
    //   console.log('result', result);
    // };
    return {
    //   list,
      currentUser,
    //   formValue,
    //   emailRules,
    //   passwordRules,
    //   onFormSubmit,
    };
  },
  components: {
    GlobalHeader,
    // ColumnList,
    // ValidateForm,
    // ValidateInput,
  },
});
</script>

<style scoped lang="less" rel="stylesheet/less">
@import "./assets/less/app.less";
h2 {
  font-weight: bold;
  background-color: rgb(32, 163, 119);
}
</style>
