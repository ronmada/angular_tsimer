export class Toolbarlist {
    id: string;
    name: string;
    options: Array<string>;
    /**
     *
     */
    constructor(id: string, name: string, option: Array<string>) {
        this.id = id
        this.name = name
        this.options = option
    }
}