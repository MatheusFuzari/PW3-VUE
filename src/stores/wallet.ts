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
        },
        isEnoughMangeCoin: (wallet: Wallet) => (qnt: number): boolean => {
            if (qnt <= wallet.mangeCoin) {
                return true
            }
            return false;
        },
        isEnoughTetherCoin: (wallet: Wallet) => (qnt: number): boolean => {
            if (qnt <= wallet.tetherCoin) {
                return true
            }
            return false;
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