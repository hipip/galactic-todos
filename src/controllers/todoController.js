import Project from "../classes/Project";
import { isSameWeek, isSameDay } from "date-fns";

const projects = [];
var completedTodos = 0;
var projectsCount = 0;

const addProject = (project) => projects.push(project) && projectsCount++;

const getProjects = () => projects;

const getProjectByName = (projectName) => projects.find({ title: projectName });

const removeProject = (projectName) => {
    projects = projects.filter((prj) => prj.title !== projectName);
};

const getTodaysTodos = () => projects.filter((project) => project.todos).filter((todo) => isSameDay(new Date(), todo.date));

const getWeekTodos = () => projects.filter((project) => project.todos).filter((todo) => isSameWeek(new Date(), todo.date));

const getProjectsCount = () => projectsCount;

const getTodosCount = () => projects.reduce((sum, project) => sum + project.getTodosCount(), 0);

const getCompletedTodosCount = () => completedTodos;

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
};
