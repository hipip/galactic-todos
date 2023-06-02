export default class Project {
    constructor(title, color) {
        this.title = title;
        this.color = color;
        this.todos = [];
    }

    setTitle(title) {
        this.title = title;
    }

    setColor(color) {
        this.color = color;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    getTodosCount() {
        return this.todos.length;
    }
}
