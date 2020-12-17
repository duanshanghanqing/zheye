import Home from '../view/Home/index.vue';
import Login from '../view/Login/index.vue';
import ColumnDetail from '../view/ColumnDetail/index.vue';

export default [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/columnDetail', name: 'columnDetail', component: ColumnDetail },
];
