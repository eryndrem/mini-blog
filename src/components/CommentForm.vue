<template>
    <div class="comment-form"
         v-if="comment">
        <div class="comment-form__username">
            <label class="comment-form__username-label">
                Your name
                <span v-show="usernameError"
                      class="error">
                    Username must be no more than 20 characters.
                </span>

                <input type="text"
                       class="comment-form__username-input"
                       v-model="username">
            </label>
        </div>

        <div class="comment-form__text">
            <label class="comment-form__text-label">
                Comment text
                <span v-show="textError"
                      class="error">
                    Text is required.
                </span>

                <textarea v-model="text"
                          class="comment-form__text-textarea"
                          placeholder="Leave a comment"></textarea>
            </label>
        </div>

        <button class="comment-form__submit"
                @click="submit">Submit</button>
    </div>
</template>

<script>
export default {
    name: 'CommentForm',

    props: {
        comment: Object,
    },

    data: () => ({
        usernameError: false,
        textError: false,
    }),

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
        isValid() {
            this.usernameError = this.comment.username.length === 0
                || this.comment.username.length > 20;

            this.textError = this.comment.text.length === 0;

            return !(this.usernameError || this.textError);
        },

        submit() {
            if (this.isValid()) {
                this.$emit('submit');
            }
        },
    },
};
</script>
