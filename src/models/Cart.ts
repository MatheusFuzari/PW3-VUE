import { Part } from "./Parts";

export class ItemCart {
    head: Part = new Part();
    leftArm: Part = new Part();
    rightArm: Part = new Part();
    torso: Part = new Part();
    base: Part = new Part();

    getTotalCost(): number {
        return this.head.cost + this.leftArm.cost + this.rightArm.cost + this.torso.cost + this.base.cost;
    }
}

export class Cart {
    robots: Array<ItemCart> = [];
    cost: number = 0.0;
}