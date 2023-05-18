import { Category } from "../types/types.js";

export class Task {
  public name: string;
  public done: boolean;
  public category?: Category;

  private createAt: Date;

  constructor(
    name: string,
    done: boolean,
    category: Category = Category.GENERAL
  ) {
    this.name = name;
    this.done = done;
    this.category = category;
    this.createAt = new Date();
  }

  LogCreationDate(extra: string) {
    console.log(`task has been created" ${this.createAt} ${extra || ""}`);
  }
}
