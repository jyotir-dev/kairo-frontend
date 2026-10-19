<script setup>
// Props
defineProps({
    size: {
        type: [Number, String],
        default: 14
    }
});
</script>

<template>
    <!-- Check Icon -->
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5"></path>
    </svg>
</template>