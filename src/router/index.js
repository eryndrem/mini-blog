import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'posts',
        component: () => import(/* webpackChunkName: "posts" */ '../pages/Posts.vue'),
    },
    {
        path: '/create_post',
        name: 'create_post',
        component: () => import(/* webpackChunkName: "create_post" */ '../pages/CreatePost.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
