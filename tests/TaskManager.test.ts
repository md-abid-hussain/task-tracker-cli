import path from 'path';
import { TaskManager } from '../src/TaskManager';
import fs from 'fs';

describe('TaskManager', () => {
    let taskManager: TaskManager;
    const testFilePath = path.join(process.cwd(), 'test-task.json');

    beforeEach(() => {
        taskManager = new TaskManager(testFilePath)
        taskManager['tasks'] = []
    });

    afterEach(() => {
        if (fs.existsSync(testFilePath)) {
            fs.rmSync(testFilePath);
        }
    })

    test('should add a task', () => {
        taskManager.addTask('test task');
        expect(taskManager['tasks'].length).toBe(1);
        expect(taskManager['tasks'][0].description).toBe('test task')
    });

    test('should update a task', () => {
        taskManager.addTask('test task');
        taskManager.updateTask(1, 'updated task');
        expect(taskManager['tasks'][0].description).toBe('updated task');
    });

    test('should delete a task', () => {
        taskManager.addTask('new task')
        taskManager.deleteTask(1);
        expect(taskManager['tasks'].length).toBe(0)
    });

    test('should mark a task as in-progress', () => {
        taskManager.addTask('new task')
        taskManager.markTask(1, 'in-progress');
        expect(taskManager['tasks'][0].status).toBe('in-progress')
    });

    test('should mark task as done', () => {
        taskManager.addTask('new task')
        taskManager.markTask(1, 'done');
        expect(taskManager['tasks'][0].status).toBe('done')
    });

    test('should list tasks', () => {
        taskManager.addTask('Test task 1');
        taskManager.addTask('Test task 2');
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        taskManager.listTasks();
        expect(consoleSpy).toHaveBeenCalled();
        consoleSpy.mockRestore();
    });
})