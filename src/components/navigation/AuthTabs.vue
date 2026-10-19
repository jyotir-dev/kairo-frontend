<script setup>
// Imports
import { useRoute } from 'vue-router';

// Route
const route = useRoute();
</script>

<template>
    <!-- Auth Tabs -->
    <div class="auth-tabs">
        <RouterLink :to="{ name: 'login' }" class="auth-tab" :class="{ active: route.name === 'login' }">Log in</RouterLink>
        <RouterLink :to="{ name: 'signup' }" class="auth-tab" :class="{ active: route.name === 'signup' }">Sign up</RouterLink>
    </div>
</template>

<style scoped>
.auth-tabs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 4px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.045);
    border: 1px solid rgba(255, 255, 255, 0.065);
}

.auth-tab {
    padding: 8px;
    border-radius: 6px;
    font-family: var(--font-main);
    font-size: 12.5px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    color: var(--text-muted-1);
    cursor: pointer;
    transition: color 0.15s ease, background 0.15s ease;
}

.auth-tab.active {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.065);
}

.auth-tab:hover {
    color: var(--text-primary);
}
</style>
