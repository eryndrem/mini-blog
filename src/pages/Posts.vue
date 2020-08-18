<template>
    <div class="posts">
        <h1 class="posts__my-posts">My posts</h1>

        <p v-if="posts.length === 0"
           class="posts__no-posts">
            There are no posts
        </p>

        <article v-else
                 class="post"
                 v-for="{ name, title, shortDescription } in posts"
                 :key="name">
                <div class="post__tools">
                    <div class="post__title">
                        {{ title }}
                    </div>

                    <div class="post__name">
                        {{ name }}
                    </div>

                    <span class="mdi mdi-tooltip-edit post__edit"
                          title="edit"></span>

                    <span class="mdi mdi-delete post__delete"
                          title="delete"
                          @click="deletePost(name)"></span>
                </div>

                <div class="post__short-description">
                    {{ shortDescription }}
                </div>
        </article>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'BlogPosts',

    computed: mapState({
        posts: (state) => state.posts,
    }),

    methods: {
        deletePost(name) {
            this.$store.dispatch('deletePost', name);
        },
    },
};
</script>
