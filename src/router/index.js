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
    {
        path: '/post/:name',
        name: 'post',
        component: () => import(/* webpackChunkName: "post:name" */ '../pages/Post.vue'),
    },
    {
        path: '/edit-post/:name',
        name: 'edit-post',
        component: () => import(/* webpackChunkName: "edit-post:name" */ '../pages/EditPost.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
