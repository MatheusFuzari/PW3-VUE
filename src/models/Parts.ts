export enum PartTypes {
    "heads", "torsos", "arms", "bases"
}

// Se quiser algo com um valor inicial para nao tratar valroes iniciais undefined, null ou async = class
// quando não tem problema dos valores iniciais e/ou for não for manuseado muito = type 

export class Part {
    id: number = 0;
    description: string = "";
    title: string = "";
    src: string = "";
    type: PartTypes = PartTypes.arms;
    cost: number = 0.0;
} 

export class PartsResponse {
    heads: Array<Part> = [];
    arms: Array<Part> = [];
    torsos: Array<Part> = [];
    bases: Array<Part> = [] ;
}
