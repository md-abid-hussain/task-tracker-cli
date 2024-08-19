# Task Tracker : CLI Application

Task Tracker is a command-line interface (CLI) application for managing tasks. It allows you to add, update, delete, mark, and list tasks efficiently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Development](#development)
- [Testing](#testing)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/task-tracker-cli.git
   cd task-tracker-cli
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Build the project:

   ```sh
   npm run build
   ```

4. Link the application:
   ```sh
   npm link .
   ```

## Usage

To use the Task Tracker CLI, run the following command:

```sh
task-cli <command> [parameters]
```

## Commands

### Add a Task

```sh
task-cli add <description>
```

- `<description>`: The description of the task to be added.

### Update a Task

```sh
task-cli update <id> <description>
```

- `<id>`: The ID of the task to be updated.
- `<description>`: The new description of the task.

### Delete a Task

```sh
task-cli delete <id>
```

- `<id>`: The ID of the task to be deleted.

### Mark a Task as In-Progress

```sh
task-cli mark-in-progress <id>
```

- `<id>`: The ID of the task to be mark in progress.

### Mark a Task as Done

```sh
task-cli mark-done <id>
```

- `<id>`: The ID of the task to be marked as done.

### List Tasks

```sh
task-cli list [status]
```

- `[status]`: Optional. The status of tasks to list (`todo`, `in-progress`, `done`). If not provided, all tasks will be listed.

## Development

### Project Structure

```
.gitignore
jest.config.js
package.json
README.md
src/
    commands/
        AddTaskCommand.ts
        Command.ts
        DeleteTaskCommand.ts
        ListTaskCommand.ts
        MarkTaskCommand.ts
        UpdateTaskCommand.ts
    index.ts
    Invoker.ts
    TaskManager.ts
    utils/
        ...
tasks.json
tests/
    TaskManager.test.ts
tsconfig.json
```

### Testing

To run tests, use the following command:

```sh
npm test
```
