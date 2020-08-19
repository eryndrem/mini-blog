<template>
    <div class="posts">
        <h1 class="posts__my-posts">My posts</h1>

        <p v-if="posts.length === 0"
           class="posts__no-posts">
            There are no posts
        </p>

        <article v-else
                 v-for="{ name, title, shortDescription } in posts"
                 :key="name"
                 class="short-post">
            <div class="short-post__header">
                <div class="short-post__title">
                    {{ title }}
                </div>

                <div class="short-post__name">
                    {{ name }}
                </div>

                <router-link tag="span"
                             class="mdi mdi-tooltip-edit short-post__edit"
                             :to="`edit-post/${name}`"
                             title="edit">
                </router-link>

                <span class="mdi mdi-delete short-post__delete"
                      title="delete"
                      @click="deletePost(name)"></span>

            </div>

            <p class="short-post__short-description">
                {{ shortDescription }}
            </p>

            <router-link class="short-post__read-more"
                         :to="`post/${name}`">
                Read more...
            </router-link>
        </article>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Posts',

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
