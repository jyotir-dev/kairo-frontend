<script setup>
// Components
import Notification from '@/components/feedback/Notification.vue';

// Stores
import notificationStore from '@/stores/notification.store';
</script>

<template>
    <!-- Notification Stack -->
    <TransitionGroup name="notification" tag="div" class="notification-stack" aria-live="polite">
        <Notification
            v-for="notification in notificationStore.notifications"
            :key="notification.id"
            :type="notification.type"
            :title="notification.title"
            :message="notification.message"
            @dismiss="notificationStore.dismiss(notification.id)"
        />
    </TransitionGroup>
</template>

<style scoped>
.notification-stack {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 386px;
    padding: 18px;
    pointer-events: none;
}

.notification-enter-active,
.notification-leave-active,
.notification-move {
    transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.notification-enter-from,
.notification-leave-to {
    opacity: 0;
    transform: translateX(120%);
}

.notification-leave-active {
    position: absolute;
    width: calc(100% - 36px);
}

@media (prefers-reduced-motion: reduce) {
    .notification-enter-active,
    .notification-leave-active,
    .notification-move {
        transition: none;
    }
}
</style>