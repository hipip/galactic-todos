import "./style.css";
import init from "./controllers/Ui";
import { addProject } from "./controllers/todoController";
import Project from "./classes/Project";

addProject(new Project("Work", "#FFEEAA"));
addProject(new Project("Coding", "#00AEEA"));
init();
