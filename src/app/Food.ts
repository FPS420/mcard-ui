export interface IFood {
    name: string,
    price: number,
    description: string,
    tag: string
}
export class Food implements IFood {
    public name: string;
    public price: number;
    public description: string;
    public tag: string;
    constructor(name: string, price: number, description: string, tag: string) {
        this.description = description;
        this.name = name;
        this.price = price;
        this.tag = tag;

    }
}