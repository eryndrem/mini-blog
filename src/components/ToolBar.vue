<template>
    <div class="tool-bar">
        <h1 class="tool-bar__title">Mini blog</h1>

        <nav class="tool-bar__nav">
            <a class="link tool-bar__link">
                <router-link class="link tool-bar__link"
                             to="/">Blogs posts </router-link>
                <router-link class="link tool-bar__link"
                             to="/diffs_of_depth">Create post</router-link>
            </a>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'ToolBar',
};
</script>
