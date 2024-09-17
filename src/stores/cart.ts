import { defineStore } from 'pinia'
import { type Cart, type ItemCart } from '@/models/Cart';
import { toRaw } from 'vue';

export const useCart = defineStore('cart', {
    state: (): Cart => ({
        robots: [],
        cost: 0.0
      }),
    persist: true,
    actions: {
      addRobot(robot: ItemCart) {
        console.log(robot);

        this.robots = [
          ...this.robots,
          robot
        ]
        
        this.updateCost();
      },
      updateCost() {
        let cost = 0.0;
        this.robots.forEach(robot => {
          cost += robot.base.cost
          cost += robot.head.cost
          cost += robot.leftArm.cost
          cost += robot.rightArm.cost
          cost += robot.torso.cost
        });
        this.cost = cost;
      },
      removeFromCart(index: number) {
        this.robots.splice(index, 1);
        this.updateCost();
      }
    },
    getters: {
        getCart(): Cart {
          return {robots: this.robots,cost: this.cost};
        }

    }
  })