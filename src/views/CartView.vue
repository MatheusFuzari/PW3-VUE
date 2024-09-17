<script setup lang="ts">
import { Cart } from '@/models/Cart';
import { useCart } from '@/stores/cart';
import { computed, ref, type Ref } from 'vue';

    const cart = useCart();
    const robots:Ref<Cart> = ref(new Cart());

    const getRobots = () => {
        robots.value = cart.getCart;
        console.log(robots.value);
    }

    getRobots();
</script>
<template>
    <div>
        <h1>Cart Page!</h1>
        <table>
            <thead>
                <th>Item</th>
                <th>Head</th>
                <th>L Arm</th>
                <th>R Arm</th>
                <th>Torso</th>
                <th>Base</th>
                <th>Ação</th>
            </thead>
            <tbody>
                <tr v-for="(robot, index) in robots.robots" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{robot.head.id}} - {{robot.head.title}}</td>
                    <td>{{robot.leftArm.id}} - {{robot.leftArm.title}}</td>
                    <td>{{robot.rightArm.id}} - {{robot.rightArm.title}}</td>
                    <td>{{robot.torso.id}} - {{robot.torso.title}}</td>
                    <td>{{robot.base.id}} - {{robot.base.title}}</td>
                    <td><button @click="cart.removeFromCart(index)">Excluir</button></td>
                </tr>
                <tr>
                    <td colspan="5">Valor total:</td>
                    <td colspan="2">{{robots.cost}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>