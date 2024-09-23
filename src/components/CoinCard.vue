<script setup lang="ts">

const props = defineProps({
  imagePath: String,
  coinName: String,
  quantity: Number,
  actualPrice: String,
  highPrice: String,
  lowPrice: String,
});

</script>

<template>
  <div class="w-1/4 h-fit bg-indigo-700 flex flex-col justify-center items-center gap-2 rounded-lg text-white p-5">
    <img :src="props.imagePath" :alt="`${props.coinName} Logo`" class="rounded-full w-2/3">
    <h3 class="text-2xl font-bold">{{ props.coinName }}</h3>
    <p v-if="props.quantity != undefined">Quantidade Atual: <span class=" text-lg font-semibold">{{
      props.quantity.toFixed(2)
        }}</span>
    </p>

    <p v-if="props.highPrice != undefined || props.actualPrice != undefined || props.lowPrice != undefined">Histórico
    </p>
    <div class="w-full flex flex-row justify-around gap-2 text-center">
      <p v-if="props.highPrice != undefined">Alta: {{ parseFloat(props.highPrice).toFixed(2) }}</p>
      <p v-if="props.actualPrice != undefined">Atual: {{ parseFloat(props.actualPrice).toFixed(2) }}</p>
      <p v-if="props.lowPrice != undefined">Baixa: {{ parseFloat(props.lowPrice).toFixed(2) }}</p>
    </div>
  </div>
</template>