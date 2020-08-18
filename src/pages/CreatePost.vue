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
        date: new Date(),
    }),

    computed: {
        name: {
            get() {
                return this.$store.state.post.name;
            },
            set(value) {
                this.$store.commit('SET_POST_NAME', value);
            },
        },

        title: {
            get() {
                return this.$store.state.post.title;
            },
            set(value) {
                this.$store.commit('SET_POST_TITLE', value);
            },
        },

        shortDescription: {
            get() {
                return this.$store.state.post.shortDescription;
            },
            set(value) {
                this.$store.commit('SET_POST_SHORT_DESCRIPTION', value);
            },
        },

        text: {
            get() {
                return this.$store.state.post.text;
            },
            set(value) {
                this.$store.commit('SET_TEXT', value);
            },
        },

        getDate() {
            return this.date.toLocaleString('ru');
        },
    },

    methods: {
        createPost() {
            this.$store.dispatch('createPost', this.getDate);
        },
    },
};
</script>
