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

    created() {
        this.$store.dispatch('loadDataFromStorage');
    },
};
</script>

<style lang="sass">
@import "styles/main"
</style>
