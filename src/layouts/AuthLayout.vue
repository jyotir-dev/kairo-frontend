<script setup>
import Aurora from '@/components/design/Aurora.vue';
</script>

<template>
    <!-- Auth Page-->
    <div class="auth-page">
        <!-- Auth Layout -->
        <div class="auth-layout">
            <Aurora />
            <!-- Auth Area -->
            <div class="auth-area">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style scoped>
.auth-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100dvh;
    background-color: #09080d;
    background-image:
        radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0) 35%),
        radial-gradient(circle at 100% 0%, rgba(236, 72, 153, 0.22), rgba(236, 72, 153, 0) 32%),
        radial-gradient(circle at 100% 100%, rgba(79, 70, 229, 0.35), rgba(79, 70, 229, 0) 38%),
        radial-gradient(circle at 0% 100%, rgba(124, 58, 237, 0.2), rgba(124, 58, 237, 0) 32%);
}
.auth-layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    max-width: min(1150px, calc(100vw - 80px));
    height: min(600px, calc(100dvh - 80px));
    border-radius: 15px;
    overflow: auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.auth-area {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0b0a11;
    background-image:
        linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(233, 213, 255, 0.35) 50%, rgba(255, 255, 255, 0)),
        radial-gradient(ellipse 90% 55% at 50% -5%, rgba(139, 92, 246, 0.42) 0%, rgba(139, 92, 246, 0.2) 30%, rgba(139, 92, 246, 0.06) 55%, rgba(139, 92, 246, 0) 75%),
        radial-gradient(ellipse 65% 55% at 105% 105%, rgba(236, 72, 153, 0.26) 0%, rgba(236, 72, 153, 0.12) 35%, rgba(236, 72, 153, 0.03) 60%, rgba(236, 72, 153, 0) 75%),
        radial-gradient(ellipse 45% 60% at -5% 60%, rgba(124, 58, 237, 0.16) 0%, rgba(124, 58, 237, 0.05) 50%, rgba(124, 58, 237, 0) 75%);
    background-size: 100% 1px, 100% 100%, 100% 100%, 100% 100%;
    background-repeat: no-repeat;
}

@media (max-width: 775px) {
    .auth-layout {
        grid-template-rows: minmax(150px, auto) 1fr;
        grid-template-columns: minmax(0, 1fr);
        max-width: none;
        min-height: 100dvh; 
        height: auto;
        border-radius: 0;
        box-shadow: none;
    }
    .auth-area {
        padding: 40px 0px;
    }
}
</style>
