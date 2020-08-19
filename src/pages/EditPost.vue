<template>
    <div>
        <article class="post"
                 v-if="post">
            <div class="post__tools">
                <span class="post__date">
                    {{ post.date }}
                </span>

                <span class="post__name">
                    {{ post.name }}
                </span>
            </div>

            <label>
                Title
                <input class="post__title"
                       v-model="post.title">
            </label>

            <label>
                Short description
                <input class="post__short-description"
                       v-model="post.shortDescription">
            </label>

            <label>
                Text
                <textarea class="post__text"
                          v-model="post.text"></textarea>
            </label>
        </article>

        <button @click="saveDataToStorage">Save changes</button>
    </div>
</template>

<script>
export default {
    name: 'EditPost',

    data: () => ({
        post: null,
    }),

    methods: {
        saveDataToStorage() {
            this.$store.dispatch('saveDataToStorage');

            this.$router.push({ name: 'posts' });
        },
    },

    async created() {
        const { name } = this.$route.params;

        const post = await this.$store.dispatch('getPostByName', name);

        this.post = post;
    },
};
</script>
