<template>
    <article class="post">
        <div class="post__tools">
            <span class="post__date">
                {{ post.date }}
            </span>

            <span class="post__name">
                {{ post.name }}
            </span>
        </div>

        <h2 class="post__title">
            {{ post.title }}
        </h2>

        <p class="post__short-description">
            {{ post.shortDescription }}
        </p>

        <p class="post__text">
            {{ post.text }}
        </p>
    </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data: () => ({
        post: null,
    }),

    computed: mapState({
        posts: (state) => state.posts,

        getName() {
            return this.$route.params.name;
        },
    }),

    created() {
        for (let i = 0; i < this.posts.length; i += 1) {
            if (this.posts[i].name === this.getName) {
                this.post = this.posts[i];
            }
        }
    },
};
</script>
