<script setup>
</script>

<template>
    <div class="escrow">
        <p class="id">#6c3d23da2a103be7</p>
        <p class="amount">12.5<span class="currency">SOL</span></p>
        <div class="progress-container">
            <div class="progress completed"></div>
            <div class="progress completed"></div>
            <div class="progress active"></div>
            <div class="progress"></div>
            <div class="progress"></div>
        </div>
        <div class="information">
            <p class="transfer-details">John &rightarrow; Taylor</p>
            <p class="current-status">Awaiting Release</p>
        </div>
        <div class="status"><span class="dot"></span>Funded</div>
    </div>
</template>

<style scoped>
.escrow {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
    width: 100%;
    max-width: 325px;
    padding: 20px;
    border-radius: 18px;
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.20);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.status {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px;
    font-family: var(--font-main);
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #6ee7b7;
}
.dot {
    position: relative;
    background: #34d399;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
.dot::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #34d399;
    animation: pulse 1.8s ease-out infinite;
}
.id {
    font-family: var(--font-main);
    font-size: 10.5px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.65);
}
.amount {
    font-family: var(--font-main);
    font-size: 28px;
    font-weight: 600;
    color: white;
}
.currency {
    font-family: var(--font-main);
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.65);
    margin-left: 5px;
}
.progress-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
}
.progress {
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.25);
    height: 4px;
    border-radius: 6px;
}
.progress.completed {
    background: #c4b5fd;
}
.progress.active::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
        90deg,
        #c4b5fd 0%,
        #c4b5fd calc(100% - 14px),
        #ede9fe 100%
    );
    transform: translateX(-100%);
    will-change: transform, opacity;
    animation: sweep 1.8s linear infinite;
}
.information {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.transfer-details {
    font-family: var(--font-main);
    font-size: 10.5px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.65);
}
.current-status {
    font-family: var(--font-main);
    font-size: 10.5px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.65);
}
@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0.7;
    }
    100% {
        transform: scale(2.6);
        opacity: 0;
    }
}
@keyframes sweep {
    0%   { transform: translateX(-100%); opacity: 1; }
    65%  { transform: translateX(0);     opacity: 1; }
    85%  { transform: translateX(0);     opacity: 0; }
    100% { transform: translateX(0);     opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
    .dot::after {
        animation: none;
    }

    .progress.active::after {
        animation: none;
        transform: none;
        opacity: 0.4;
    }
}
@media (max-width: 775px) {
    .escrow {
        display: none;
    }
}
</style>
