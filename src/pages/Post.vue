<template>
    <article class="post" v-if="post">
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

        <comment-form v-model="comment"
                      :comment="comment"
                      @submit="addComment" />

        <comment v-for="(comment, index) in post.comments"
                 :comment="comment"
                 :key="'comment' + index" />
    </article>
</template>

<script>
import Comment from '@/components/Comment.vue';
import CommentForm from '@/components/CommentForm.vue';

export default {
    components: {
        Comment,
        CommentForm,
    },

    data: () => ({
        post: null,
        comment: {
            username: '',
            text: '',
        },
    }),

    methods: {
        addComment() {
            this.$store.dispatch('addComment', {
                postName: this.$route.params.name,
                username: this.comment.username,
                text: this.comment.text,
            });

            this.comment.username = '';
            this.comment.text = '';
        },
    },

    async created() {
        const { name } = this.$route.params;

        const post = await this.$store.dispatch('getPostByName', name);

        this.post = post;
    },
};
</script>
