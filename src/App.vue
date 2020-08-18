<template>
    <div id="app">
        <main-layout>
            <router-view />
        </main-layout>
    </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';

export default {
    components: {
        MainLayout,
    },
};
</script>

<style lang="sass">
@import "styles/main"
</style>
