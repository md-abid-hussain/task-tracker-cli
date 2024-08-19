import { Command } from "./commands/Command";

export class Invoker {
    private command: Command;

    constructor(command: Command) {
        this.command = command
    }

    public run(): void {
        this.command.execute()
    }
}