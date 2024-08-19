import { Command } from "./Command";
import { TaskManager } from "../TaskManager";

export class UpdateTaskCommand implements Command {
    private taskManager: TaskManager;
    private id: number;
    private description: string;


    constructor(taskManager: TaskManager, id: number, description: string) {
        this.taskManager = taskManager;
        this.id = id;
        this.description = description;
    }

    execute(): void {
        this.taskManager.updateTask(this.id, this.description);
    }
}