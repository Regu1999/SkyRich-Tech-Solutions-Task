export function generateId(){
    return 'id-' + Date.now().toString(36) + Math.random().toString(36).substring(2, 10);
}