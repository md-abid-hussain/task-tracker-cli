import { Command } from "./Command";
import { TaskManager } from "../TaskManager";

export class AddTaskCommand implements Command {
    private description: string;
    private taskManager: TaskManager;

    constructor(taskManager: TaskManager, description: string) {
        this.taskManager = taskManager;
        this.description = description;
    }

    execute(): void {
        this.taskManager.addTask(this.description);
    }

}