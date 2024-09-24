<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet';
import { ref, type Ref } from 'vue';

const images = [
  ['/src/assets/jackpot/angular.png', '/src/assets/jackpot/django.png', '/src/assets/jackpot/express.png', '/src/assets/jackpot/next.png', '/src/assets/jackpot/nuxt.png', '/src/assets/jackpot/spring.png'],
  ['/src/assets/jackpot/angular.png', '/src/assets/jackpot/django.png', '/src/assets/jackpot/express.png', '/src/assets/jackpot/next.png', '/src/assets/jackpot/nuxt.png', '/src/assets/jackpot/spring.png'],
  ['/src/assets/jackpot/angular.png', '/src/assets/jackpot/django.png', '/src/assets/jackpot/express.png', '/src/assets/jackpot/next.png', '/src/assets/jackpot/nuxt.png', '/src/assets/jackpot/spring.png']
]

const wallet = useWalletStore();

const firstImage: Ref<number> = ref(0);
const secondImage: Ref<number> = ref(0);
const thirdImage: Ref<number> = ref(0);

const jackpot: Ref<boolean> = ref(false);
const balance: Ref<boolean> = ref(false);

const playJackpot = () => {
  if (wallet.isEnoughMangeCoin(0.5)) {
    balance.value = false;
    firstImage.value = Math.floor(Math.random() * 6);
    secondImage.value = Math.floor(Math.random() * 6);
    thirdImage.value = Math.floor(Math.random() * 6);

    if (firstImage.value == secondImage.value && secondImage.value == thirdImage.value) {
      jackpot.value = true;
      wallet.mangeCoin++;
    } else {
      jackpot.value = false;
      wallet.mangeCoin -= 0.5;
    }
  } else {
    balance.value = true;
  }
}

</script>

<template>
  <section class="h-[calc(100vh-80px)]">
    <div class="w-full h-full">
      <div v-if="jackpot" class="absolute top-25 left-[53rem] translate-1/2 bg-white/60 rounded-lg p-8 text-red-500">
        <p>🚀 JACKPOT 🚀</p>
      </div>
      <div v-if="balance" class="absolute top-25 left-[53rem] translate-1/2 bg-white/60 rounded-lg p-8 text-red-500">
        <p>Saldo insuficiente</p>
      </div>
      <div class="flex flex-col gap-36 justify-center items-center mt-36">
        <div class="w-1/2 h-20 flex flex-row justify-center items-center gap-5">
          <div class="w-full h-20 flex flex-row justify-center items-center gap-5">
            <img :src="images[0][firstImage]" class="w-1/4"></img>
            <img :src="images[1][secondImage]" class="w-1/4"></img>
            <img :src="images[2][thirdImage]" class="w-1/4"></img>
          </div>
        </div>
        <button class="bg-blue-500 p-5 rounded-md w-36" :onClick="playJackpot">⭐ Jogar ⭐</button>
        <fieldset class="border border-violet-900 rounded-md p-5 text-center">
          <legend class="font-semibold text-orange-700">Lembrando</legend>
          <p>Cada jogada custa 0.5 MangeCoin</p>
          <p>E caso você seja sortudo, ganhará 1 MangeCoin</p>
        </fieldset>
      </div>
    </div>
  </section>
</template>
