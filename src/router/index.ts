import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

// https://next.router.vuejs.org/api/#parameters-2
const router = createRouter({
    // history: createWebHashHistory(), // 哈希
    history: createWebHistory(), // 历史记录
    routes,
});

export default router;
