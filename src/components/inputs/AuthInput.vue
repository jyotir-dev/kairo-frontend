<script setup>
// Icon
import { Icon } from '@iconify/vue';

// Model
const model = defineModel({
    type: String,
    default: ''
});

// Props
defineProps({
    icon: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    placeholder: {
        type: String
    },
    autocomplete: {
        type: String
    },
    information: {
        type: String
    }
})
</script>

<template>
    <div class="auth-input-wrapper">
        <p class="auth-input-name">{{ name }}</p>
        <div class="auth-input-container">
            <Icon class="auth-input-icon" :icon="icon" />
            <input v-model="model" class="auth-input" :type="type" :autocomplete="autocomplete"
                :placeholder="placeholder">
        </div>
        <p v-if="information" class="auth-input-information">{{ information }}</p>
    </div>
</template>

<style scoped>
.auth-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.auth-input-name {
    font-family: var(--font-main);
    font-size: 12px;
    color: var(--text-muted-1);
}

.auth-input-container {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.045);
    border: 1px solid rgba(255, 255, 255, 0.045);
}

.auth-input {
    flex: 1;
    min-width: 0;
    font-family: var(--font-main);
    font-size: 12.5px;
    font-weight: 400;
    color: var(--text-primary);
    background: none;
    border: none;
    outline: none;
}

.auth-input-icon {
    color: rgba(255, 255, 255, 0.45);
    width: 18px;
    height: 18px;
}

.auth-input-information {
    font-family: var(--font-main);
    font-size: 10.5px;
    color: var(--text-muted-2);
}
</style>
