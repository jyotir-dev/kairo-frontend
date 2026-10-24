<script setup>
// Vue
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Services
import * as authService from '@/services/auth.service';

// Stores
import notificationStore from '@/stores/notification.store';

// Components
import KeyIcon from '@/components/icons/KeyIcon.vue';
import AuthInput from '@/components/inputs/AuthInput.vue';
import AuthButton from '@/components/buttons/AuthButton.vue';
import MailCheckIcon from '@/components/icons/MailCheckIcon.vue';

// Router
const router = useRouter();

// Variables
const email = ref();

// States
const sent = ref(false);
const loading = ref(false);

// Forgot Password
const forgotPassword = async () => {
    loading.value = true;

    try {
        const response = await authService.forgotPassword(email.value);
        console.log(response);
        sent.value = true;
    } catch (error) {
        console.log(error);
        notificationStore.error('Reset link not sent', error.message);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <!-- Forgot Password View -->
    <div v-if="!sent" class="forgot-password-view">
        <RouterLink class="back-login" :to="{ name: 'login' }">&leftarrow; Back to log in</RouterLink>
        <div class="key-badge">
            <KeyIcon />
        </div>
        <div class="forgot-password-text">
            <h1 class="headline">Forgot your password?</h1>
            <p class="text">Enter the email on your account and we'll send you a link to choose a new one.</p>
        </div>
        <AuthInput v-model="email" icon="eva:email-fill" name="Email" type="email" placeholder="you@example.com" />
        <AuthButton @click="forgotPassword" :loading="loading" >Send reset link</AuthButton>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
    <!-- Sent View -->
    <div v-if="sent" class="sent-view">
        <div class="key-badge">
            <MailCheckIcon />
        </div>
        <div class="sent-text">
            <h1 class="headline">Check your inbox</h1>
            <p class="text">If an account exists for that email, a password reset link is on its way.</p>
        </div>
        <div class="sent-information">
            <p class="information">Expires <span class="value">in 60 minutes</span></p>
            <p class="information">Single use <span class="value">Yes</span></p>
        </div>
        <AuthButton @click="router.push({ name: 'login' })">Back to log in</AuthButton>
        <p class="try-again">Didn't get it? Check spam, or <span @click="sent = !sent" class="retry">try again</span></p>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
</template>

<style scoped>
.forgot-password-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 325px;
    gap: 20px;
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

.forgot-password-text {
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

.sent-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 325px;
    gap: 20px;
}
.sent-text {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 5px;
    margin-top: 5px;
}
.sent-information {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.025);
    border: 1px solid rgba(255, 255, 255, 0.08);
}
.information {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
    font-family: var(--font-main);
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
}

.information + .information {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.value {
    color: white;
}
.try-again {
    font-family: var(--font-main);
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.40);
}
.retry {
    color: white;
    cursor: pointer;
}
.retry:hover {
    text-decoration: underline;
}
</style>
