<script setup lang="ts">
import { useWalletStore } from "@/stores/wallet";
import { type Wallet } from "@/models/wallet";

const wallet = useWalletStore();
</script>

<template>
  <header
    class="w-full h-20 text-white bg-gradient-to-br from-[#1B2838] to-[#000113]"
  >
    <nav class="w-full h-full flex flex-row justify-between items-center px-10">
      <p class="text-3xl font-bold">
        Mange <span class="text-[#F9403A]">Coin</span>
      </p>
      <div class="w-fit flex justify-around items-center gap-2 font-semibold text-xl">
        <img src="../assets/tetherCoin.png" class="w-12 h-12" />
        <p>Tether's:</p>
        <p class="text-[#00AEAE] font-bold text-2xl">
          {{ wallet.getCoins.tetherCoin }}
        </p>

        <img src="../assets/mangeCoin.jpeg" class="w-16 h-16" />
        <p>MangeCoin's:</p>
        <p class="text-[#F9403A] font-bold text-2xl">
          {{ wallet.getCoins.mangeCoin }}
        </p>
      </div>
    </nav>
  </header>
</template>
