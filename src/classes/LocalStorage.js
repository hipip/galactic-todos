import { projects } from "../controllers/todoController";
import Project from "./Project";
import Todo from "./Todo";
export default class LocalStorage {
  static save() {
    localStorage.setItem("projects", JSON.stringify(projects));
    console.log(JSON.parse(localStorage.getItem("projects")));
  }

  static load() {
    const projectsFromLocalStorage = JSON.parse(
      localStorage.getItem("projects")
    );
    try {
      for (const prj of projectsFromLocalStorage) {
        const newProject = new Project(prj.title, prj.color);
        for (const todo of prj.todos) {
          newProject.addTodo(
            new Todo(todo.title, todo.description, new Date(todo.date))
          );
        }
        projects.push(newProject);
      }
    } catch (err) {}
  }
}
