import "./style.css";
import init, { renderPage } from "./controllers/Ui";
import { addProject, getProjects, getWeekTodos } from "./controllers/todoController";
import Project from "./classes/Project";
import Todo from "./classes/Todo";

const Work = new Project("Work", "#FF0024");
const Coding = new Project("Coding", "#4AFF24");
const Business = new Project("Business", "#AA00FF");

addProject(Work);
addProject(Coding);
addProject(Business);
Work.addTodo(
    new Todo("Complete the galactic Todos project", "the last due date is 15 june so hurry up and deploy it to github pages", new Date("06-13-2023"))
);
init();
