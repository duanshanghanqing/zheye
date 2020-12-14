<template>
    <div class="container">
        <global-header :user="currentUser" />
        <column-list :list="list" />
        <global-form />
    </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css';
import { defineComponent, ref, computed } from 'vue';
import GlobalHeader, { UserProps } from './components/GlobalHeader/index.vue';
import ColumnList, { ColumnProps } from './components/ColumnList/index.vue';
import GlobalForm from './components/GlobalForm/test.vue';

const currentUser: UserProps = {
    isLogin: true,
    nickName: 'xxx',
};
const testData: ColumnProps[] = [
    {
        id: 1,
        title: 'test1',
        description: 'xxxx',
        avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
    },
    {
        id: 2,
        title: 'test2',
        description: 'xxxx',
        // avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
    },
    {
        id: 3,
        title: 'test3',
        description: 'xxxx',
        avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
    },
    {
        id: 4,
        title: 'test4',
        description: 'xxxx',
        avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
    },
];

export default defineComponent({
    name: 'App',
    props: {},
    setup() {
        const list = ref(testData);
        return {
            list,
            currentUser,
        };
    },
    components: {
        GlobalHeader,
        ColumnList,
        GlobalForm,
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
