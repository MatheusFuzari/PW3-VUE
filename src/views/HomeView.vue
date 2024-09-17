<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();

const goToBuild = () => router.push('/build');
</script>

<template>
    <div>
        <section class="home-card flex flex-row align-items-center justify-content-evenly">
            <div class="text-card flex flex-column align-items-center justify-content-center">
                <h1>
                    {{ $t('home.title') }}
                </h1>
                <button class="order app-dark-button" @click="goToBuild()">{{ $t('home.order') }}</button>
            </div>
            <img src="/images/big-bot.png">
        </section>
    </div>
</template>

<style scoped lang="scss">
h1 {
    text-align: center;
    font-weight: bolder;
    font-size: 5rem;
    width: 25rem;
}

.order {
    width: 20rem;
    height: 3.2rem;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 1rem;
    border-radius: 2.5rem;
}

img {
    width: 30%;
}
</style>
