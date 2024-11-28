export default class Todo {
  static id = 0;

  constructor(title, description, date, isDone = false) {
    this.id = ++Todo.id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.isDone = isDone;
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

  markDone() {
    this.isDone = true;
  }

  markNotDone() {
    this.isDone = false;
  }
}
