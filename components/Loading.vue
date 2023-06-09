<template>
    <div class="lds-ripple">
        <div></div>
        <div></div>
    </div>
</template>

<style>
.lds-ripple {
    display: inline-block;
    position: relative;
    margin-top: 35px;
    width: 130px;
    height: 130px;
}

.lds-ripple div {
    position: absolute;
    border: 4px solid #155e75;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 0.8s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes lds-ripple {
    0% {
        top: 60px;
        left: 60px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    4.9% {
        top: 60px;
        left: 60px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    5% {
        top: 60px;
        left: 60px;
        width: 0;
        height: 0;
        opacity: 1;
    }

    100% {
        top: 0px;
        left: 0px;
        width: 120px;
        height: 120px;
        opacity: 0;
    }
}</style>