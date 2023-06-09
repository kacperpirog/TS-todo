import { Category } from "../types/types.js";
export class Task {
    constructor(name, done, category = Category.GENERAL) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createAt = new Date();
    }
    LogCreationDate(extra) {
        console.log(`task has been created" ${this.createAt} ${extra || ""}`);
    }
}
