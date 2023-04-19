import { Category } from "../types/types.js";
export class Task {
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createAt = new Date();
    }
    LogCreationDate(extra) {
        console.log(`taks został stworzony" ${this.createAt} ${extra || ""}`);
    }
}
