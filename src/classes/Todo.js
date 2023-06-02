export default class Todo {
    static id = 0;

    constructor(title, description, date) {
        this.id = ++Todo.id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.isDone = false;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    setDescription(desc) {
        this.description = desc;
    }

    setDate(date) {
        this.date = date;
    }

    mark() {
        this.isDone = true;
    }

    unmark() {
        this.isDone = false;
    }
}
