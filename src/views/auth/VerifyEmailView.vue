<script setup>
// Vue
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Services
import * as authService from '@/services/auth.service';

// Stores
import notificationStore from '@/stores/notification.store';

// Components
import MailIcon from '@/components/icons/MailIcon.vue';
import AuthButton from '@/components/buttons/AuthButton.vue';
import LinkOffIcon from '@/components/icons/LinkOffIcon.vue';
import MailCheckIcon from '@/components/icons/MailCheckIcon.vue';


// Route
const route = useRoute();

// Router
const router = useRouter();

// Queries
const token = route.query.token;

// States
const step = ref('verifying'); // verifying | verified | expired

// Verify Email
const verifyEmail = async () => {

    if (!token) {
        step.value = 'expired';
        return;
    }

    router.replace({ query: {} });

    try {
        const response = await authService.verifyEmail(token);
        step.value = 'verified';
    } catch (error) {
        if (error.status !== 400) {
            notificationStore.error('Unable to verify email', error.message);
        }
        step.value = 'expired';
    }
};

// Mounted
onMounted(verifyEmail);
</script>

<template>
    <!-- Verifying Link View -->
    <div v-if="step === 'verifying'" class="verifying-link-view">
        <div class="key-badge">
            <MailIcon />
        </div>
        <div class="verifying-link-text">
            <h1 class="headline">Verifying your email</h1>
            <p class="text">Hang tight while we confirm your link. You'll be on your way in a moment.</p>
        </div>
        <div class="status-information">
            <p class="status"><span class="status-spinner" aria-hidden="true"></span> Checking your link</p>
            <span class="time">A few seconds</span>
        </div>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
    <!-- Email Verified View -->
    <div v-else-if="step === 'verified'"  class="email-verified-view">
        <div class="key-badge">
            <MailCheckIcon />
        </div>
        <div class="email-verified-text">
            <h1 class="headline">Email verified</h1>
            <p class="text">You're all set. You can now create and accept escrows.</p>
        </div>
        <AuthButton @click="router.push({ name: 'dashboard' })">Go to dashboard</AuthButton>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
    <!-- Link Expired View -->
    <div v-else class="link-expired-view">
        <div class="key-badge">
            <LinkOffIcon />
        </div>
        <div class="link-expired-text">
            <h1 class="headline">This link didn't work</h1>
            <p class="text">It may have expired or already been used. You can request a new one from your dashboard.</p>
        </div>
        <AuthButton @click="router.push({ name: 'dashboard' })">Go to dashboard</AuthButton>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
</template>

<style scoped>
.email-verified-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 325px;
    gap: 20px;
}

.key-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border: 1px solid transparent;
    border-radius: 16px;
    color: #e0e7ff;
    background:
        linear-gradient(#121119, #121119) padding-box,
        var(--accent-gradient) border-box;
}

.email-verified-text {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
    margin-top: 5px;
}

.headline {
    font-family: var(--font-main);
    font-size: 22px;
    font-weight: 700;
    color: white;
}

.text {
    font-family: var(--font-main);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.45);
}

.footer {
    font-family: var(--font-main);
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.25);
    text-align: center;
}

.verifying-link-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 325px;
    gap: 20px;
}

.verifying-link-text {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
    margin-top: 5px;
}

.status-information {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.025);
    border: 1px solid rgba(255, 255, 255, 0.08);
}
.status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    font-family: var(--font-main);
    font-size: 12px;
    font-weight: 400;
    color: white;
}

.time {
    font-family: var(--font-main);
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
}

.status-spinner {
    flex-shrink: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid rgba(196, 181, 253, 0.2);
    border-top-color: var(--accent-soft);
    animation: spin 0.8s linear infinite;
}

.link-expired-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 325px;
    gap: 20px;
}

.link-expired-text {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
    margin-top: 5px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@media (prefers-reduced-motion: reduce) {
    .status-spinner {
        animation: none;
    }
}
</style>
