<script setup>
import { ref } from 'vue';
import AuthTabs from '@/components/navigation/AuthTabs.vue';
import AuthInput from '@/components/inputs/AuthInput.vue';
import AuthButton from '@/components/buttons/AuthButton.vue';
import PasswordStrength from '@/components/feedback/PasswordStrength.vue';

const email = ref();
const username = ref();
const password = ref();
</script>

<template>
    <div class="signup-view">
        <AuthTabs />
        <div class="signup-text">
            <h1 class="headline">Create your account</h1>
            <p class="text">Set up your kairo in a minute.</p>
        </div>
        <AuthInput icon="eva:person-fill" name="Username" type="text" placeholder="username" information="3–32 characters. Letters, numbers and underscores." />
        <AuthInput icon="eva:email-fill" name="Email" type="email" placeholder="you@example.com" />
        <div class="signup-password">
            <AuthInput v-model="password" icon="eva:shield-fill" name="Password" type="password" placeholder="password" />
            <PasswordStrength :password="password" />
        </div>
        <AuthButton>Create Account</AuthButton>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
</template>

<style scoped>
.signup-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 325px;
    gap: 20px;
}
.signup-text {
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
    color: rgba(255, 255, 255, 0.45);
}
.signup-password {
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
</style>
