import { Food } from "./Food";

export interface IMenu {
    _id: String,
    items: Array<Food>,
    owner: String
}
export class Menu implements IMenu {
    public _id: String;
    public items: Array<Food>;
    public owner: String
    constructor(id: string, items: Array<Food>, owner: string) {
        this._id = id;
        this.items = items;
        this.owner = owner;
    }
}
