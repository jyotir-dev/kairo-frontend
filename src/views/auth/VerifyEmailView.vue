<script setup>
import AuthButton from '@/components/buttons/AuthButton.vue';
import MailCheckIcon from '@/components/icons/MailCheckIcon.vue';
</script>

<template>
    <div class="email-verified-view">
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
    color: #e9d5ff;
    background:
        linear-gradient(#121119, #121119) padding-box,
        linear-gradient(135deg, #a855f7, #ec4899 50%, #4f46e5) border-box;
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
    color: rgba(255, 255, 255, 0.45);
}

.footer {
    font-family: var(--font-main);
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.25);
    text-align: center;
}

</style>
