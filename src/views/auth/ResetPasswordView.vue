<script setup>
// Vue
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Services
import * as authService from '@/services/auth.service';

// Stores
import notificationStore from '@/stores/notification.store';

// Components
import KeyIcon from '@/components/icons/KeyIcon.vue';
import AuthInput from '@/components/inputs/AuthInput.vue';
import AuthButton from '@/components/buttons/AuthButton.vue';
import LinkOffIcon from '@/components/icons/LinkOffIcon.vue';
import PasswordStrength from '@/components/feedback/PasswordStrength.vue';

// Route
const route = useRoute();

// Router
const router = useRouter();

// Queries
const token = route.query.token;

// Variables
const newPassword = ref('');
const confirmPassword = ref('');

// States
const loading = ref(false);
const step = ref('checking'); // checking | expired | reset

// Verify Reset Token
const verifyResetToken = async () => {

    if (!token) {
        step.value = 'expired';
        return;
    }

    router.replace({ query: {} });

    try {
        const response = await authService.verifyResetToken(token);
        step.value = 'reset';
    } catch (error) {
        if (error.status !== 400) {
            notificationStore.error('Unable to check link', error.message);
        }
        step.value = 'expired';
    }
};

// Reset Password
const resetPassword = async () => {

    if (newPassword.value !== confirmPassword.value) {
        notificationStore.error('Passwords don\'t match', 'Make sure both passwords are the same');
        return;
    }

    loading.value = true;

    try {
        const response = await authService.resetPassword(token, newPassword.value);
        notificationStore.success('Password updated', 'Log in with your new password');
        router.push({ name: 'login' });
    } catch (error) {
        if (error.status === 400 && error.message === 'Invalid or expired reset link.') {
            step.value = 'expired';
            return;
        }
        notificationStore.error('Unable to reset password', error.message);
    } finally {
        loading.value = false;
    }
};

// Mounted
onMounted(verifyResetToken);
</script>

<template>
    <!-- Link Checking View -->
    <div v-if="step === 'checking'" class="link-checking-view">
        <div class="key-badge">
            <KeyIcon />
        </div>
        <div class="link-checking-text">
            <h1 class="headline">Checking your link</h1>
            <p class="text">Making sure your reset link is still valid before you choose a new password.</p>
        </div>
        <div class="status-information">
            <p class="status"><span class="status-spinner" aria-hidden="true"></span>Checking your reset link</p>
            <span class="time">A few seconds</span>
        </div>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
    <!-- Reset Password View -->
    <div v-else-if="step === 'reset'" class="reset-password-view">
        <RouterLink class="back-login" :to="{ name: 'login' }">&leftarrow; Back to log in</RouterLink>
        <div class="key-badge">
            <KeyIcon />
        </div>
        <div class="reset-password-text">
            <h1 class="headline">Choose a new password</h1>
            <p class="text">Make it at least 8 characters. You'll use it to log in from now on.</p>
        </div>
        <div class="new-password">
            <AuthInput v-model="newPassword" icon="eva:shield-fill" name="New password" type="password"
                placeholder="New password" />
            <PasswordStrength :password="newPassword" />
        </div>
        <AuthInput v-model="confirmPassword" icon="eva:shield-fill" name="Confirm password" type="password"
            placeholder="Confirm password" />
        <AuthButton @click="resetPassword" :loading="loading">Reset Password</AuthButton>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
    <!-- Link Expired View -->
    <div v-else class="link-expired-view">
        <div class="key-badge">
            <LinkOffIcon />
        </div>
        <div class="link-expired-text">
            <h1 class="headline">The link has expired</h1>
            <p class="text">Reset links work once and last 60 minutes. Request a new one and we'll send it right away.
            </p>
        </div>
        <AuthButton @click="router.push({ name: 'forgotPassword' })">Request a new link</AuthButton>
        <p class="remembered">Remembered it? <span @click="$router.push({ name: 'login' })" class="login">Back to log
                in</span></p>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
</template>

<style scoped>
.reset-password-view {
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

.reset-password-text {
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

.new-password {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer {
    font-family: var(--font-main);
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.25);
    text-align: center;
}

.link-checking-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 325px;
    gap: 20px;
}

.link-checking-text {
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

.back-login {
    font-family: var(--font-main);
    font-size: 12px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.40);
}

.back-login:hover {
    text-decoration: underline;
}

.login {
    color: white;
    cursor: pointer;
}

.login:hover {
    text-decoration: underline;
}

.remembered {
    font-family: var(--font-main);
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.40);
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
