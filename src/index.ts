#!/usr/bin/env node
import { Invoker } from "./Invoker";
import { TaskManager } from "./TaskManager";
import { AddTaskCommand } from "./commands/AddTaskCommand";
import { UpdateTaskCommand } from "./commands/UpdateTaskCommand";
import { DeleteTaskCommand } from "./commands/DeleteTaskCommand";
import { MarkTaskCommand } from "./commands/MarkTaskCommand";
import { ListTasksCommand } from "./commands/ListTaskCommand";
import { checkParams } from "./utils/paramChecker";

const taskManager = new TaskManager('tasks.json')

const args = process.argv.slice(2);
const command = args[0];
const params = args.slice(1);

if (!checkParams(command, params)) {
    console.log('Invalid parameters')
    process.exit(1);
}

let invoker: Invoker;

switch (command) {
    case 'add':
        invoker = new Invoker(new AddTaskCommand(taskManager, params[0]));
        break;
    case 'update':
        invoker = new Invoker(new UpdateTaskCommand(taskManager, parseInt(params[0]), params[1]));
        break;
    case 'delete':
        invoker = new Invoker(new DeleteTaskCommand(taskManager, parseInt(params[0])));
        break;
    case 'mark-in-progress':
        invoker = new Invoker(new MarkTaskCommand(taskManager, parseInt(params[0]), 'in-progress'));
        break;
    case 'mark-done':
        invoker = new Invoker(new MarkTaskCommand(taskManager, parseInt(params[0]), 'done'));
        break;
    case 'list':
        invoker = new Invoker(new ListTasksCommand(taskManager, params[0] as 'todo' | 'in-progress' | 'done'));
        break
    default:
        console.log('Unknown command');
        process.exit(1);
}

invoker.run()