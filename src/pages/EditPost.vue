<template>
    <div v-if="post"
         class="edit-post">
        <div class="edit-post__header">
            <span class="edit-post__date">
                {{ post.date }}
            </span>

            <span class="edit-post__name">
                {{ post.name }}
            </span>
        </div>

        <h2 class="edit-post__edit">Editing</h2>

        <div class="edit-post__title">
            <label class="edit-post__title-label">
                Title
                <span v-show="titleError"
                      class="error">
                    Title is required. Title length must be no more than 100 characters.
                </span>

                <input class="edit-post__title-input"
                       v-model="post.title">
            </label>
        </div>

        <div class="edit-post__short-description">
            <label class="edit-post__short-description-label">
                Short description
                <span v-show="shortDescriptionError"
                      class="error">
                    Short description is required.
                    Short description length must no more than 120 characters.
                </span>

                <input class="edit-post__short-description-input"
                       v-model="post.shortDescription">
            </label>
        </div>

        <div class="edit-post__text">
            <label class="edit-post__text-label">
                Text
                <span v-show="textError"
                      class="error">
                    Text is required.
                </span>

                <textarea class="edit-post__text-textarea"
                          v-model="post.text"></textarea>
            </label>
        </div>

        <button class="edit-post__save-changes"
                @click="saveDataToStorage">Save</button>
    </div>
</template>

<script>
export default {
    name: 'EditPost',

    data: () => ({
        post: null,

        titleError: false,
        shortDescriptionError: false,
        textError: false,
    }),

    methods: {
        isValid() {
            this.titleError = this.post.title.length === 0 || this.post.title.length > 100;

            this.shortDescriptionError = this.post.shortDescription.length === 0
                || this.post.shortDescription.length > 120;

            this.textError = this.post.text.length === 0;

            return !(this.titleError || this.shortDescriptionError
                || this.textError);
        },

        saveDataToStorage() {
            if (this.isValid()) {
                this.$store.dispatch('saveDataToStorage');

                this.$router.push({ name: 'posts' });
            }
        },
    },

    async created() {
        const { name } = this.$route.params;

        const post = await this.$store.dispatch('getPostByName', name);

        this.post = post;
    },
};
</script>
