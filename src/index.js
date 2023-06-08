import "./style.css";
import init, { renderPage } from "./controllers/Ui";
import { addProject, getProjects, getWeekTodos } from "./controllers/todoController";
import Project from "./classes/Project";
import Todo from "./classes/Todo";

addProject(new Project("Work", "#FFEEAA"));
addProject(new Project("Coding", "#00AEEA"));
addProject(new Project("Gym", "#FFAA00"));
getProjects()[0].addTodo(new Todo("Wake up early", "to finish the work", new Date("5/5/2023")));
init();
