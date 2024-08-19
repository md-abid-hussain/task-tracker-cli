export function checkParams(command: string, params: string[]): boolean {
    switch (command) {
        case 'add':
            return params.length === 1;
        case 'update':
            return params.length === 2 && !isNaN(parseInt(params[0]));
        case 'delete':
            return params.length === 1 && !isNaN(parseInt(params[0]));
        case 'mark-in-progress':
        case 'mark-done':
            return params.length === 1 && !isNaN(parseInt(params[0]));
        case 'list':
            return params.length === 0;
        default:
            return false;
    }
}