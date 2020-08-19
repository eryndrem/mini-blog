<template>
    <div v-if="post"
         class="post">
        <article>
            <div class="post__header">
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

        <div>
            <comment-form v-model="comment"
                          :comment="comment"
                          @submit="addComment" />

            <h3 class="post__comments">Comments</h3>

            <p v-if="post.comments.length === 0"
               class="post__no-comment">
                No comments
            </p>

            <comment v-for="(comment, index) in post.comments"
                     :comment="comment"
                     :key="'comment' + index" />
        </div>
    </div>
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
