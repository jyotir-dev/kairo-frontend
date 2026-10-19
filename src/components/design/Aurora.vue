<script setup>
// Imports
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Components
import Escrow from '@/components/preview/Escrow.vue';
import CheckIcon from '@/components/icons/CheckIcon.vue';

// Route
const route = useRoute();

// Pages
const PAGES = {
    login: {
        headline: 'Trust, held in escrow.',
        text: 'Peer-to-peer deals on Solana. Funds sit in a dedicated wallet until the sender releases them.',
        showPreview: true
    },
    signup: {
        headline: 'Start your first escrow today.',
        text: 'Create an account, invite the other side, and let the escrow hold the funds until the work is done.',
        showPreview: true
    },
    forgotPassword: {
        headline: 'Locked out?\nWe\'ve got you.',
        text: 'Reset links work once, expire in an hour, and sign out\n every device when used.'
    },
    checkInbox: {
        headline: 'Locked out?\nWe\'ve got you.',
        text: 'Reset links work once, expire in an hour, and sign out every device when used.'
    },
    resetPassword: {
        headline: 'Almost\nback in.',
        text: 'Pick a new password. Saving it signs out every other device, so only you have access.'
    }
};

// Points
const POINTS = [
    'A fresh wallet for every deal',
    'Private keys encrypted with AES-256-GCM',
    'Funds move only when the sender releases'
];

// Page
const page = computed(() => PAGES[route.name] ?? PAGES.login);
</script>

<template>
    <!-- Aurora -->
    <div class="aurora">
        <p class="aurora-name">Kairo.</p>
        <div class="aurora-area">
            <div class="aurora-box">
                <h1 class="aurora-headline">{{ page.headline }}</h1>
                <p class="aurora-text">{{ page.text }}</p>
            </div>
            <Escrow v-if="page.showPreview" />
        </div>
        <!-- Aurora Points -->
        <ul class="aurora-points">
            <li v-for="point in POINTS" :key="point" class="aurora-point">
                <CheckIcon />
                {{ point }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.aurora {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    background-color: #1e0b4b;
    background-image:
        linear-gradient(180deg, rgba(3, 3, 5, 0) 55%, rgba(3, 3, 5, 0.5) 100%),
        radial-gradient(circle at 12% 10%, #a855f7 0%, rgba(168, 85, 247, 0) 45%),
        radial-gradient(circle at 92% 16%, #ec4899 0%, rgba(236, 72, 153, 0) 40%),
        radial-gradient(circle at 55% 96%, #4f46e5 0%, rgba(79, 70, 229, 0) 55%),
        radial-gradient(circle at 18% 78%, #7c3aed 0%, rgba(124, 58, 237, 0) 40%);
}

.aurora-name {
    font-family: var(--font-main);
    font-weight: 700;
    font-size: 18px;
    color: var(--text-primary);
    letter-spacing: -0.5px;
}

.aurora-area {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
}

.aurora-box {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.aurora-headline {
    font-family: var(--font-main);
    font-weight: 600;
    font-size: 38px;
    line-height: 50px;
    letter-spacing: -1.8px;
    white-space: pre-line;
    color: var(--text-primary);
}

.aurora-text {
    font-family: var(--font-main);
    font-size: 12.5px;
    line-height: 25px;
    white-space: pre-line;
    color: var(--text-secondary);
}

.aurora-points {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
}

.aurora-point {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-main);
    font-size: 12px;
    color: var(--accent-soft);
}

@media (max-width: 775px) {
    .aurora {
        padding: 20px 40px;
        gap: 20px;
    }
    .aurora-name {
        font-size: 18px;
    }
    .aurora-headline {
        font-size: 24px;
        letter-spacing: -1px;
        line-height: 38px;
    }
    .aurora-points {
        display: none;
    }
}
</style>
