import Vue from 'vue';
import VueRouter from 'vue-router';
import BlogPosts from '@/pages/BlogPosts.vue';
import CreatePost from '@/pages/CreatePost.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'blog_posts',
        component: BlogPosts,
    },
    {
        path: '/create-post',
        name: 'create_post',
        component: CreatePost,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
