<template>
    <div class="create-post">
        <div class="post-form">
            <label class="post-form__name-label">
                Name
                <input class="post-form__name-input"
                       v-model="name"
                       type="text">
            </label>

            <label class="post-form__title-label">
                Title
                <input class="post-form__title-input"
                       v-model="title"
                       type="text">
            </label>

            <label class="post-form__short-description-label">
                Short Description
                <input class="post-form__short-description-input"
                       v-model="shortDescription"
                       type="text">
            </label>

            <label class="post-form__text-label">
                Text
                <textarea class="post-form__text-input"
                          v-model="text"
                          cols="30"
                          rows="10"></textarea>
            </label>

            <button @click="createPost">Add post</button>
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
    }),

    methods: {
        createPost() {
            this.$store.dispatch('createPost', {
                name: this.name,
                title: this.title,
                shortDescription: this.shortDescription,
                text: this.text,
            });

            this.$router.push({ name: 'posts' });
        },
    },
};
</script>
