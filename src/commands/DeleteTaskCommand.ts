import { Command } from "./Command";
import { TaskManager } from "../TaskManager";

export class DeleteTaskCommand implements Command {
    private taskManager: TaskManager
    private id: number;

    constructor(taskManager: TaskManager, id: number) {
        this.taskManager = taskManager;
        this.id = id
    }

    execute(): void {
        this.taskManager.deleteTask(this.id);
    }
}