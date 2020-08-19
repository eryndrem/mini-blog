<template>
    <div class="post__comment">
        <h5>Author: {{ comment.username }}</h5>

        <span class="mdi mdi-delete-variant"
              @click="deleteComment"></span>

        <p>{{ comment.text }}</p>
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
