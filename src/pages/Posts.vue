<template>
    <div class="posts">
        <h1 class="posts__my-posts">My posts</h1>

        <p v-if="posts.length === 0"
           class="posts__no-posts">
            There are no posts
        </p>

        <article v-else
                 v-for="{ name, title, shortDescription, comments } in posts"
                 :key="name"
                 class="post-preview">
            <div class="post-preview__header">
                <div class="post-preview__title">
                    {{ title }}
                </div>

                <div class="post-preview__name">
                    {{ name }}
                </div>

                <router-link tag="span"
                             class="mdi mdi-tooltip-edit post-preview__edit"
                             :to="`edit-post/${name}`"
                             title="edit">
                </router-link>

                <span class="mdi mdi-delete post-preview__delete"
                      title="delete"
                      @click="deletePost(name)"></span>
            </div>

            <p class="post-preview__short-description">
                {{ shortDescription }}
            </p>

            <div class="post-preview__footer">
                <router-link class="post-preview__read-more"
                             :to="`post/${name}`">
                    Read more...
                </router-link>

                <span v-if="comments.length === 0"
                      class="post-preview__no-comments">No comments</span>

                <span v-else-if="comments.length === 1"
                      class="post-preview__comments">{{ comments.length }} comment</span>

                <span v-else
                      class="post-preview__comments">{{ comments.length }} comments </span>
            </div>
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
