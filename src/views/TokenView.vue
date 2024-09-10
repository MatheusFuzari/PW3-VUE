<script setup lang="ts">
import { useWalletStore } from '@/stores/wallet';

const wallet = useWalletStore();

</script>

<template>
  <section class="h-[calc(100vh-80px)]">
    <div class="flex flex-row justify-center items-center mt-10">
      <div class="bg-[#440023] max-w-80 max-h-64 rounded-2xl shadow-md z-10">
        <p></p>
        <div class="bg-[#950633] w-80 h-64 rounded-2xl relative -top-2 -left-2 z-0">
          <div class="bg-white w-24 h-24 rounded-bl-lg absolute -right-3">
            <img src="../assets/mangeCoin.jpeg" class="w-3/5 m-auto mt-5 rounded-full">
          </div>
        </div>
      </div>
      <p>---></p>
      <p><---</p>
      <div class="bg-[#008F8F] max-w-80 max-h-64 rounded-2xl shadow-md z-10">
        
        <div class="bg-[#00AEAE] w-80 h-64 rounded-2xl relative -top-2 -left-2 z-0">
          <div class="bg-white w-24 h-24 rounded-bl-lg absolute -right-3">
            <img src="../assets/tetherCoin.png" class="w-3/5 m-auto mt-5">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>