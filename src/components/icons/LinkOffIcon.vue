<script setup>
// Props
defineProps({
    size: {
        type: [Number, String],
        default: 24
    }
});
</script>

<template>
    <!-- Link Off Icon -->
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M9 17H7a5 5 0 0 1 0-10h2M15 7h2a5 5 0 0 1 4 8"></path>
        <path d="M8 12h4M3 3l18 18"></path>
    </svg>
</template>