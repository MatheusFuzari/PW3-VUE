<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { i18n, changeLanguage, type AvailableLanguages } from '@/i18n/i18n';

const language: Ref<AvailableLanguages> = ref('br');

const change = () => {
    if(i18n.global.locale.value == 'br'){
        language.value = 'en';
        changeLanguage('en');
    }
    else{
        language.value = 'br';
        changeLanguage('br');
    }
}
</script>

<template class="flex flex-row align-items-center justify-content-start">
    <header class="menu-header flex flex-row align-items-center">
        <img src="/images/build-a-bot-logo.png" alt="robot logo">
        <nav class="ml-5">
            <RouterLink class='m-4' to="/">Home</RouterLink>
            <RouterLink class='m-4' to="/build">Build</RouterLink>
            <RouterLink class='m-4' to="/cart">Cart</RouterLink>
            <img src="/world.svg" @click="change()" class="translate-button">
        </nav>
    </header>
</template>

<style scoped lang="scss">
.menu-header {
    height: 5rem;
    width: 40rem;
    max-width: 100%;

    img {
        margin-left: 4rem;
        height: 4rem;
    }

    nav > a {
        text-decoration: none;
        font-size: 1.5rem;
        color: var(--app-dark-text-color);
    }
    nav > .router-link-exact-active {
        font-weight: bold;
    }

    .translate-button{
        width: 2rem;
        height: fit-content;
        cursor: pointer;
    }
}
</style>