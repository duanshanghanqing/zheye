import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

// https://next.router.vuejs.org/api/#parameters-2
const router = createRouter({
    // history: createWebHashHistory(), // 哈希
    history: createWebHistory(), // 历史记录
    routes,
});

// 全局路由拦截器
// https://next.router.vuejs.org/api/#type
router.beforeEach((to, from, next) => {
    console.log('to', to);
    console.log('from', from);
    next(); // 允许跳转
});

export default router;
