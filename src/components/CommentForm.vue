<template>
    <div class="comment-form"
         v-if="comment">
        <div>
            <label>
                Your name
                <input type="text"
                       v-model="username">
            </label>
        </div>

        <div>
            <label>
                Comment text
                <textarea v-model="text"></textarea>
            </label>
        </div>

        <button @click="submit">Submit</button>
    </div>
</template>

<script>
export default {
    name: 'CommentForm',

    props: {
        comment: Object,
    },

    computed: {
        username: {
            get() {
                return this.comment.username;
            },
            set(value) {
                this.$emit('input', {
                    ...this.comment, username: value,
                });
            },
        },
        text: {
            get() {
                return this.comment.text;
            },
            set(value) {
                this.$emit('input', {
                    ...this.comment, text: value,
                });
            },
        },
    },

    methods: {
        submit() {
            this.$emit('submit');
        },
    },
};
</script>
