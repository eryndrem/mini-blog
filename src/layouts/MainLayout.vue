<template>
    <div>
        <tool-bar></tool-bar>

        <slot></slot>
    </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';

export default {
    name: 'MainLayout',

    components: {
        'tool-bar': ToolBar,
    },
};
</script>
