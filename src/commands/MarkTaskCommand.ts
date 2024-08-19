import { Command } from "./Command";
import { TaskManager } from "../TaskManager";

export class MarkTaskCommand implements Command {
    private taskManager: TaskManager;
    private id: number;
    private status: 'in-progress' | 'done';

    constructor(taskManager: TaskManager, id: number, status: 'in-progress' | 'done') {
        this.taskManager = taskManager;
        this.id = id;
        this.status = status
    }

    execute(): void {
        this.taskManager.markTask(this.id, this.status);
    }
}