import type { Wallet } from "@/models/wallet";
import { defineStore } from "pinia";

export const useWalletStore = defineStore('wallet', {
    state: (): Wallet => ({
        tetherCoin: 50,
        mangeCoin: 3,
    }),
    getters: {
        getCoins(): Wallet{
            return {tetherCoin: this.tetherCoin, mangeCoin: this.mangeCoin }
        }
    },
    actions: {

    }
});