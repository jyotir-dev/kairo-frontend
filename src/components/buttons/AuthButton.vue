<script setup>
// Props
defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <button class="auth-button" :disabled="disabled || loading" >
        <span v-if="loading" class="auth-button-spinner" aria-hidden="true"></span>
        <slot v-else />
    </button>
</template>

<style scoped>
.auth-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border: none;
    outline: none;
    border-radius: 8px;
    font-family: var(--font-main);
    font-size: 12.5px;
    font-weight: 600;
    color: var(--button-primary-text);
    background: var(--button-primary-bg);
    cursor: pointer;
    transition:
        filter 0.2s ease,
        transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
        opacity 0.2s ease;
}

.auth-button:hover:not(:disabled) {
    filter: brightness(0.92);
}

.auth-button:active:not(:disabled) {
    transform: scale(0.98);
}

.auth-button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

.auth-button-spinner {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(11, 10, 16, 0.2);
    border-top-color: var(--button-primary-text);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@media (prefers-reduced-motion: reduce) {
    .auth-button {
        transition: none;
    }
}
</style>
