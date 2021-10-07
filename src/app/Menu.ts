import { Food } from "./Food";

export interface IMenu {
    id: String,
    items: Array<Food>,
    owner: String
}
export class Menu implements IMenu {
    public id: String;
    public items: Array<Food>;
    public owner: String
    constructor(id: string, items: Array<Food>, owner: string) {
        this.id = id;
        this.items = items;
        this.owner = owner;
    }
}
