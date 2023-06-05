import Project from "../classes/Project";
import { isSameWeek, isSameDay } from "date-fns";

const projects = [];
var completedTodos = 0;
var projectsCount = 0;

const addProject = (project) => {
    projects.push(project);
    projectsCount++;
};

const getProjects = () => projects;

const getProjectByName = (title) => projects.find((v) => v.title == title);

const removeProject = (projectName) => {
    projects = projects.filter((prj) => prj.title !== projectName);
};

const getTodosByProjectName = (projectName) => getProjectByName(projectName).todos;

const getTodaysTodos = () => projects.flatMap((project) => project.todos).filter((todo) => isSameDay(new Date(), todo.date));

const getWeekTodos = () => projects.flatMap((project) => project.todos).filter((todo) => isSameWeek(new Date(), todo.date));

const getProjectsCount = () => projectsCount;

const getTodosCount = () => projects.reduce((sum, project) => sum + project.getTodosCount(), 0);

const getCompletedTodosCount = () => completedTodos;

const addTodo = (todo, projectName) => {
    const p = getProjectByName(projectName);
    p.todos.push(todo);
};

const IncCompletedTodos = () => ++completedTodos;
const DecCompletedTodos = () => --completedTodos;

const deleteTodo = (projectName, todoId) => {
    const p = getProjectByName(projectName);
    p.todos = p.todos.filter((todo) => todo.id !== todoId);
};

const markDone = (projectName, todoId) => {
    const toMarkDone = getProjectByName(projectName).todos.find((t) => t.id === todoId);
    toMarkDone.markDone();
};

const unMarkDone = (projectName, todoId) => {
    const toMarkDone = getProjectByName(projectName).todos.find((t) => t.id === todoId);
    toMarkDone.markNotDone();
};

export {
    addProject,
    getProjects,
    getProjectByName,
    removeProject,
    getTodaysTodos,
    getWeekTodos,
    getProjectsCount,
    getTodosCount,
    getCompletedTodosCount,
    IncCompletedTodos,
    DecCompletedTodos,
    deleteTodo,
    markDone,
    getTodosByProjectName,
    addTodo,
};
