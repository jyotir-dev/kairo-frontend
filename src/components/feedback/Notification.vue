<script setup>
// Icon
import { Icon } from '@iconify/vue';

// Props
defineProps({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
});

// Emits
defineEmits(['dismiss']);
</script>

<template>
    <!-- Notification -->
    <div class="notification" :class="type">
        <div class="notification-header">
            <div class="left">
                <span class="notification-dot"></span>
                <p class="notification-title">{{ title }}</p>
            </div>
            <div class="right">
                <p class="notification-time">now</p>
                <button class="notification-close" @click="$emit('dismiss')">
                    <Icon icon="eva:close-outline" />
                </button>
            </div>
        </div>
        <p class="notification-message">{{ message }}</p>
    </div>
</template>

<style scoped>
.notification {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 4px;
    padding: 14px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    background-color: rgba(11, 10, 17, 0.72);
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(233, 213, 255, 0.4) 50%, rgba(255, 255, 255, 0));
    background-size: 100% 1px;
    background-repeat: no-repeat;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 8px 24px rgba(10, 5, 25, 0.45);
    pointer-events: auto;
}

.notification-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

.left {
    display: flex;
    align-items: center;
    gap: 8px;
}

.right {
    display: flex;
    align-items: center;
    gap: 8px;
}

.notification-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.notification.success .notification-dot {
    background: #34d399;
    box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.18);
}

.notification.error .notification-dot {
    background: #f87171;
    box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.18);
}

.notification-title {
    font-family: var(--font-main);
    font-size: 12.75px;
    font-weight: 600;
    color: var(--text-primary);
}

.notification-time {
    font-family: var(--font-main);
    font-size: 11px;
    color: rgba(255, 255, 255, 0.55);
}

.notification-close {
    display: flex;
    padding: 2px;
    margin-right: -4px;
    border: none;
    border-radius: 4px;
    background: none;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.45);
    cursor: pointer;
    transition: all 0.15s ease;
}

.notification-close:hover {
    color: white;
    background: rgba(255, 255, 255, 0.06);
}

.notification-message {
    padding-left: 14px;
    font-family: var(--font-main);
    font-size: 12.25px;
    line-height: 1.45;
    color: rgba(255, 255, 255, 0.6);
}
</style>