import Vue from 'vue';
import VueRouter from 'vue-router';
// import Post from '@/pages/Post.vue';

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
    {
        path: '/post/:name',
        name: 'post',
        component: () => import(/* webpackChunkName: "post:name" */ '../pages/Post.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
