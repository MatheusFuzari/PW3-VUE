<script setup lang="ts">
    import {getParts} from "../services/part.service";
    import { Part, PartsResponse, PartTypes } from '../models/Parts';
    import { type Ref, ref, reactive } from "vue";
    import PartSelector from "@/components/PartSelector.vue";
    import type { ItemCart } from "@/models/Cart";
    import { useCart } from "@/stores/cart";

    const cart = useCart();
    const parts:Ref<PartsResponse> = ref(new PartsResponse());
    const selectedParts = reactive<Partial<ItemCart>>({
        head: new Part(),
        leftArm: new Part(),
        rightArm: new Part(),
        torso: new Part(),
        base: new Part()
    });
    

    getParts()
    .then(response => {
        parts.value = response
        console.log(parts.value)
        selectedParts.head = response.heads[0];
        selectedParts.leftArm = response.arms[0];
        selectedParts.rightArm = response.arms[0];
        selectedParts.torso = response.torsos[0];
        selectedParts.base = response.bases[0];
    })
    .catch(error => console.error(error)
    );

    const addCart = () => {
        console.log(selectedParts);
        cart.addRobot(selectedParts as ItemCart);
    }

    
</script>
<template>
    <div>
        <h1 class="text-center mb-2">{{ $t("build.title") }}</h1>
        <!-- <p>{{ parts }}</p> -->
        <div>
            <section class="top-row">
                <PartSelector :parts="parts.heads" position="top" v-model="selectedParts.head"/>
            </section>
            <section class="middle-row">
                <PartSelector :parts="parts.arms" position="left" v-model="selectedParts.leftArm"/>
                <PartSelector :parts="parts.torsos" position="center" v-model="selectedParts.torso"/>
                <PartSelector :parts="parts.arms" position="right" v-model="selectedParts.rightArm"/>
            </section>
            <section class="bottom-row">
                <PartSelector :parts="parts.bases" position="bottom" v-model="selectedParts.base"/>
            </section>
            <div class="flex flex-row align-items-center justify-content-center">
                <button class="mt-4 pt-2 pb-2 pr-5 pl-5 app-dark-button" @click="addCart()">{{ $t('build.add_cart') }}</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .top-row {
        display: flex;
        justify-content: space-around;
    }

    .middle-row {
        display: flex;
        justify-content: center;
    }

    .bottom-row {
        display: flex;
        justify-content: space-around;
    }
</style>