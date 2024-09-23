<script setup lang="ts">
import CoinCard from '@/components/CoinCard.vue';
import { getAvalanche, getBitcoin, getEthereum, getSolana, type Coin } from '@/services/CoinService';
import { useWalletStore } from '@/stores/wallet';
import { reactive, ref, type Reactive, type Ref } from 'vue';

const wallet = useWalletStore();

const otherCoins = reactive({
  solana: {
    open: '',
    high: '',
    low: '',
  },
  bitcoin: {
    open: '',
    high: '',
    low: '',
  },
  ethereum: {
    open: '',
    high: '',
    low: '',
  },
  avalanche: {
    open: '',
    high: '',
    low: '',
  }
})

getSolana()
  .then(response => {
    otherCoins.solana = response.data;
  })
  .catch(error => {
    console.error(error);
  })

getBitcoin()
  .then(response => {
    otherCoins.bitcoin = response.data;
  })
  .catch(error => {
    console.error(error);
  })

getEthereum()
  .then(response => {
    otherCoins.ethereum = response.data;
  })
  .catch(error => {
    console.error(error);
  })

getAvalanche()
  .then(response => {
    otherCoins.avalanche = response.data;
  })
  .catch(error => {
    console.error(error);
  })
</script>

<template>
  <section class="h-[calc(100vh-80px)]">
    <div class="flex flex-row justify-center items-center mt-10 gap-10">
      <CoinCard coinName="MangeCoin" imagePath="/src/assets/mangeCoin.jpeg" :quantity="wallet.mangeCoin"></CoinCard>
      <div class="w-fit flex flex-col justify-center items-center gap-5">
        <h3 class="text-purple-950 font-bold text-3xl">Exchange</h3>
        <fieldset class="border border-violet-900 rounded-md p-5 text-center">
          <legend class="font-semibold text-orange-700">Lembrando</legend>
          <p>Cada MangeCoin equivale a 2.5 Tether's</p>
          <p>E cada Tether equivale a 0.4 MangeCoin's</p>
        </fieldset>
        <button class="bg-blue-800 p-3 rounded-md text-orange-500" :onClick="wallet.mangeToTether">MangeCoin ->
          Tether</button>
        <button class="bg-blue-800 p-3 rounded-md text-orange-500" :onClick="wallet.tetherToMange">MangeCoin <-
            Tether</button>
      </div>
      <CoinCard coinName="TetherCoin" imagePath="/src/assets/tetherCoin.png" :quantity="wallet.tetherCoin"></CoinCard>
    </div>
    <div class="flex flex-wrap mt-5 p-5 gap-5 w-full justify-center">
      <CoinCard coinName="Solana" imagePath="/src/assets/solanaCoin.png" :actualPrice="otherCoins.solana.open"
        :highPrice="otherCoins.solana.high" :lowPrice="otherCoins.solana.low" class="w-[15rem]">
      </CoinCard>

      <CoinCard coinName="BitCoin" imagePath="/src/assets/bitCoin.png" :actualPrice="otherCoins.bitcoin.open"
        :highPrice="otherCoins.bitcoin.high" :lowPrice="otherCoins.bitcoin.low" class="w-[15rem]">
      </CoinCard>
      <CoinCard coinName="Ethereum" imagePath="/src/assets/ethereumCoin.png" :actualPrice="otherCoins.ethereum.open"
        :highPrice="otherCoins.ethereum.high" :lowPrice="otherCoins.ethereum.low" class="w-[15rem]">
      </CoinCard>
      <CoinCard coinName="Avalanche" imagePath="/src/assets/avalancheCoin.png" :actualPrice="otherCoins.avalanche.open"
        :highPrice="otherCoins.avalanche.high" :lowPrice="otherCoins.avalanche.low" class="w-[15rem]">
      </CoinCard>
    </div>
  </section>
</template>