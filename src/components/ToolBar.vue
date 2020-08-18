<template>
    <div class="tool-bar">
        <h1 class="tool-bar__title">Mini blog</h1>

        <nav class="tool-bar__nav">
            <router-link class="link tool-bar__link"
                         to="/">Posts </router-link>

            <router-link class="link tool-bar__link"
                         to="/create_post">Create post</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'ToolBar',
};
</script>
