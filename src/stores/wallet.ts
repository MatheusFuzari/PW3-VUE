import type { Wallet } from "@/models/wallet";
import { defineStore } from "pinia";

export const useWalletStore = defineStore('wallet', {
    state: (): Wallet => ({
        tetherCoin: 50,
        mangeCoin: 3,
    }),
    getters: {
        getCoins(): Wallet {
            return { tetherCoin: this.tetherCoin, mangeCoin: this.mangeCoin }
        }
    },
    actions: {
        mangeToTether() {
            if (this.mangeCoin >= 1) {
                this.mangeCoin--;
                this.tetherCoin += 2.5;
            }
        },
        tetherToMange() {
            if (this.tetherCoin >= 1) {
                this.tetherCoin--;
                this.mangeCoin += 0.4;
            }
        }
    }
});