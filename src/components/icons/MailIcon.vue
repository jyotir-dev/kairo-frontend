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
    <!-- Mail Icon -->
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
        <path d="m3 7 9 6 9-6"></path>
    </svg>
</template>