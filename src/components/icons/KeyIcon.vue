<script setup>
defineProps({
    size: {
        type: [Number, String],
        default: 24
    }
});
</script>

<template>
    <!-- Key Icon -->
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="7.5" cy="15.5" r="4.5"></circle>
        <path d="m10.7 12.3 9.8-9.8M17 6l3 3M14.5 8.5l2 2"></path>
    </svg>
</template>