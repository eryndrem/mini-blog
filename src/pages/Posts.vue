<template>
    <div>
        There are no posts.
        <div>{{ posts }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'BlogPosts',

    computed: mapState({
        posts: (state) => state.posts,
    }),
};
</script>
