<script setup>
import { ref } from 'vue';
import AuthTabs from '@/components/navigation/AuthTabs.vue';
import AuthInput from '@/components/inputs/AuthInput.vue';
import AuthButton from '@/components/buttons/AuthButton.vue';

const loading = ref(false)
</script>

<template>
    <div class="login-view">
        <AuthTabs />
        <div class="login-text">
            <h1 class="headline">Welcome Back</h1>
            <p class="text">Log in to manage your escrows.</p>
        </div>
        <AuthInput icon="eva:person-fill" name="Username" type="text" placeholder="username" />
        <AuthInput icon="eva:shield-fill" name="Password" type="password" placeholder="password" />
        <AuthButton >Log in</AuthButton>
        <a class="forgot-password" href="forgot-password">Forgot password?</a>
        <p class="footer">Kairo · Secure peer-to-peer escrow on Solana</p>
    </div>
</template>

<style scoped>
.login-view {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 325px;
    gap: 20px;
}
.login-text {
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
.footer {
    font-family: var(--font-main);
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.25);
    text-align: center;
}
.forgot-password {
    font-family: var(--font-main);
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.40);
}
.forgot-password:hover {
    text-decoration: underline;
}
</style>
