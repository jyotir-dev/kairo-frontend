<script setup>
// Imports
import { computed } from 'vue';

// Props
const props = defineProps({
    password: {
        type: String, 
        default: ''
    }
});

// Levels
const LEVELS = ['Too short', 'Weak', 'Fair', 'Good', 'Strong'];

// Rules
const RULES = [
    (value) => value.length >= 12,
    (value) => /[a-z]/.test(value) && /[A-Z]/.test(value),
    (value) => /[^A-Za-z]/.test(value)
];

// Score (0–4)
const score = computed(() => {
    const value = props.password;
    if (value.length < 8) return 0;
    return 1 + RULES.filter((rule) => rule(value)).length;
});
</script>

<template>
    <!-- Password Strength -->
    <div class="password-strength">
        <div class="password-strength-bars">
            <span
                v-for="bar in 4"
                :key="bar"
                class="password-strength-bar"
                :class="{ filled: bar <= score }"
            ></span>
        </div>
        <div class="password-strength-information">
            <p>At least 8 characters.</p>
            <p v-if="password" class="password-strength-label">{{ LEVELS[score] }}</p>
        </div>
    </div>
</template>

<style scoped>
.password-strength {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
}
.password-strength-bars {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 6px;
}
.password-strength-bar {
    height: 4px;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
}

.password-strength-bar.filled {
    background: #a78bfa;
}

.password-strength-information {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-main);
    font-size: 10.5px;
    color: var(--text-muted-2);
}

.password-strength-label {
    font-weight: 600;
    color: var(--accent-soft);
}
</style>
