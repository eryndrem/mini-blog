<template>
    <div class="create-post">
        <div class="post-form">
            <h2 class="post-form__create-new-post">Create new post</h2>

            <div class="post-form__name">
                <label class="post-form__name-label">
                    Post name
                    <span class="mdi mdi-information-outline post-form__note-info"
                          @click="toggleNoteVisible"></span>

                    <span v-show="noteVisible"
                          class="post-form__note">
                        This value will be used to form url.
                        Only latin letters, numbers and underscores are allowed.
                    </span>

                    <span v-show="nameError"
                          class="error">
                        Post name is required. Post name length must be no more than 20 characters.
                        Only latin letters, numbers and underscores are allowed.
                    </span>

                    <input class="post-form__name-input"
                           v-model="name"
                           type="text">
                </label>
            </div>

            <div class="post-form__title">
                <label class="post-form__title-label">
                    Title
                    <span v-show="titleError"
                          class="error">
                        Title is required. Title length must be no more than 100 characters.
                    </span>

                    <input class="post-form__title-input"
                           v-model="title"
                           type="text">
                </label>
            </div>

            <div class="post-form__short-description">
                <label class="post-form__short-description-label">
                    Short Description

                    <span v-show="shortDescriptionError"
                          class="error">
                        Short description is required.
                        Short description length must no more than 120 characters.
                    </span>

                    <input class="post-form__short-description-input"
                           v-model="shortDescription"
                           type="text">
                </label>
            </div>

            <div class="post-form__text">
                <label class="post-form__text-label">
                    Text

                    <span v-show="textError"
                          class="error">
                        Text is required.
                    </span>

                    <textarea class="post-form__text-textarea"
                              v-model="text"></textarea>
                </label>
            </div>

            <button class="post-form__create-button"
                    @click="createPost">Create post</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreatePost',

    data: () => ({
        name: '',
        title: '',
        shortDescription: '',
        text: '',

        noteVisible: false,

        nameError: false,
        titleError: false,
        textError: false,
        shortDescriptionError: false,
    }),

    methods: {
        isValid() {
            this.nameError = this.name.length === 0 || this.name.length > 20
                || /\W/.test(this.name);

            this.titleError = this.title.length === 0 || this.title.length > 100;

            this.shortDescriptionError = this.shortDescription.length === 0
                || this.shortDescription.length > 120;

            this.textError = this.text.length === 0;

            return !(this.nameError || this.titleError || this.shortDescriptionError
                || this.textError);
        },

        createPost() {
            if (this.isValid()) {
                this.$store.dispatch('createPost', {
                    name: this.name,
                    title: this.title,
                    shortDescription: this.shortDescription,
                    text: this.text,
                });

                this.$router.push({ name: 'posts' });
            }
        },

        toggleNoteVisible() {
            this.noteVisible = !this.noteVisible;
        },
    },
};
</script>
