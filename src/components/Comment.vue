<template>
    <div class="comment">
        <div class="comment__header">
            <h5 class="comment__username">Author: {{ comment.username }}</h5>

            <span class="mdi mdi-delete-variant comment__delete"
                  @click="deleteComment"
                  title="delete"></span>
        </div>

        <p class="comment__text">{{ comment.text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Comment',

    props: {
        comment: Object,
    },

    methods: {
        deleteComment() {
            this.$store.dispatch('deleteComment', {
                postName: this.$route.params.name,
                username: this.comment.username,
                text: this.comment.text,
            });
        },
    },
};
</script>
