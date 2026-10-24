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
import PasswordStrength from '@/components/feedback/PasswordStrength.vue';

// Router
const router = useRouter();

// Variables
const newPassword = ref();
const confirmPassword = ref();

// States
const loading = ref(false);
const expired = ref(false);
</script>

<template>
    <!-- Reset Password View -->
    <div v-if="!expired" class="reset-password-view">
        <RouterLink class="back-login" :to="{ name: 'login' }">&leftarrow; Back to log in</RouterLink>
        <div class="key-badge">
            <KeyIcon />
        </div>
        <div class="forgot-password-text">
            <h1 class="headline">Choose a new password</h1>
            <p class="text">Make it at least 8 characters. You'll use it to log in from now on.</p>
        </div>
        <div class="new-password">
            <AuthInput v-model="newPassword" icon="eva:email-fill" name="New password" type="password" placeholder="New password" />
            <PasswordStrength :password="newPassword" />
        </div>
        <AuthInput v-model="confirmPassword" icon="eva:email-fill" name="Confirm password" type="password" placeholder="Confirm password" />
        <AuthButton @click="resetPassword" :loading="loading">Reset Password</AuthButton>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
    <!-- Link Expired View -->
    <div v-if="expired" class="link-expired-view">
        <div class="key-badge">
            <KeyIcon />
        </div>
        <div class="forgot-password-text">
            <h1 class="headline">The link has expired</h1>
            <p class="text">Reset links work once and last 60 minutes. Request a new one and we'll send it right away.</p>
        </div>
        <AuthButton @click="resetPassword" :loading="loading">Request a new link</AuthButton>
        <p class="back-login">Remembered it? <span @click="$router.push({ name: 'login'})" class="login">Back to log in</span></p>
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

.link-expired-view {
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

.login {
    color: white;
    cursor: pointer;
}

.login:hover {
    text-decoration: underline;
}

</style>
