import fs from 'fs';

interface Task {
    id: number;
    description: string;
    status: 'todo' | 'in-progress' | 'done';
    createdAt: string;
    updatedAt: string;
}

export class TaskManager {
    private filePath: string;
    private tasks: Task[];

    constructor(filePath: string) {
        this.filePath = filePath;
        this.tasks = this.loadTasks();
    }

    private loadTasks(): Task[] {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            return JSON.parse(data);
        } else {
            try {
                fs.writeFileSync(this.filePath, JSON.stringify([]));
                return [];
            } catch (error) {
                console.log('Error while creating file', error)
                return [];
            }
        }
    }

    // save tasks
    private saveTasks(): void {
        fs.writeFileSync(this.filePath, JSON.stringify(this.tasks, null, 2));
    }

    public addTask(description: string): void {
        const newTask: Task = {
            id: this.tasks.length + 1,
            description,
            status: 'todo',
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString()
        };
        this.tasks.push(newTask);
        this.saveTasks();
        console.log(`Task added successfully (ID: ${newTask.id})`);
    }

    public updateTask(id: number, description: string): void {
        const existingTask = this.tasks.find((task) => task.id === id);
        if (existingTask) {
            existingTask.description = description;
            existingTask.updatedAt = new Date().toLocaleString();
            this.saveTasks();
            console.log(`Task updated successfully (ID: ${existingTask.id})`);
        } else {
            console.log(`Task not found (ID: ${id})`);
        }
    }

    public deleteTask(id: number): void {
        this.tasks = this.tasks.filter((task) => task.id !== id)
        this.saveTasks()
        console.log(`Task deleted successfully (ID: ${id})`);
    }

    public markTask(id: number, status: 'in-progress' | 'done'): void {
        const existingTask = this.tasks.find((task) => task.id === id);
        if (existingTask) {
            existingTask.status = status;
            existingTask.updatedAt = new Date().toLocaleString();
            this.saveTasks()
            console.log(`Task marked as ${status} (ID: ${id})`);
        } else {
            console.log(`Task not found (ID: ${id})`);
        }
    }

    public listTasks(status?: 'todo' | 'in-progress' | 'done'): void {
        const tasksToDisplay = status ? this.tasks.filter((task) => task.status === status) : this.tasks
        if (tasksToDisplay.length === 0) {
            console.log('No task found');
            return;
        }
        const headers = ['ID', 'Description', 'Status', 'Created At', 'Updated At'];
        const rows = this.tasks.map(task => [
            task.id,
            task.description,
            task.status,
            task.createdAt,
            task.updatedAt
        ]);

        // Calculate column widths
        const colWidths = headers.map((header, i) => Math.max(header.length, ...rows.map(row => (row[i]).toString().length)));

        // Print header
        const headerRow = headers.map((header, i) => header.padEnd(colWidths[i])).join(' | ');
        console.log('-'.repeat(headerRow.length));
        console.log(headerRow);
        console.log('-'.repeat(headerRow.length));

        // Print rows
        rows.forEach(row => {
            const rowStr = row.map((cell, i) => cell.toString().padEnd(colWidths[i])).join(' | ');
            console.log(rowStr);
        });
        console.log('-'.repeat(headerRow.length));

    }
}