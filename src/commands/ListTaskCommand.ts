import { Command } from "./Command";
import { TaskManager } from "../TaskManager";

export class ListTasksCommand implements Command {
    private taskManager: TaskManager;
    private status?: 'todo' | 'in-progress' | 'done'

    constructor(taskManager: TaskManager, status?: 'todo' | 'in-progress' | 'done') {
        this.taskManager = taskManager;
        this.status = status;
    }

    execute(): void {
        this.taskManager.listTasks(this.status);
    }
}