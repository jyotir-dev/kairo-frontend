<script setup>
defineProps({
    size: {
        type: [Number, String],
        default: 24
    }
});
</script>

<template>
    <!-- Mail Check Icon -->
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 12.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8"></path>
        <path d="m3 7 9 6 9-6"></path>
        <path d="m15.5 18 2 2 4-4"></path>
    </svg>
</template>