import { isSameWeek, isSameDay } from "date-fns";
import LocalStorage from "../classes/LocalStorage";

let projects = [];
let completedTodos = 0;
let deletedTodos = 0;

const addProject = (project) => {
  projects.push(project);
  LocalStorage.save();
};

const getProjects = () => projects;

const getProjectByName = (title) => projects.find((v) => v.title == title);

const removeProject = (projectName) => {
  projects = projects.filter((prj) => prj.title !== projectName);
  LocalStorage.save();
};

const getTodosByProjectName = (projectName) =>
  getProjectByName(projectName).todos;

const getTodaysTodos = () => {
  const todaysTodos = [];
  projects.forEach((project) => {
    project.todos.forEach((todo) => {
      if (isSameDay(new Date(), todo.date)) {
        todo.project = project.title;
        todaysTodos.push(todo);
      }
    });
  });
  return todaysTodos;
};
const getWeekTodos = () => {
  const weekTodos = [];
  projects.forEach((project) => {
    project.todos.forEach((todo) => {
      if (isSameWeek(new Date(), todo.date)) {
        todo.project = project.title;
        weekTodos.push(todo);
      }
    });
  });
  return weekTodos;
};

const getProjectsCount = () => projects.length;

const getTodosCount = () =>
  projects.reduce((sum, project) => sum + project.getTodosCount(), 0);

const getCompletedTodosCount = () => completedTodos;

const addTodo = (todo, projectName) => {
  const p = getProjectByName(projectName);
  p.todos.push(todo);
  LocalStorage.save(projects);
};

const IncCompletedTodos = () => ++completedTodos;
const DecCompletedTodos = () => --completedTodos;

const deleteTodo = (projectName, todoId) => {
  const p = getProjectByName(projectName);
  p.todos = p.todos.filter((todo) => todo.id !== todoId);
  LocalStorage.save();
  deletedTodos++;
};

const markDone = (projectName, todoId) => {
  const toMarkDone = getProjectByName(projectName).todos.find(
    (t) => t.id === todoId
  );
  toMarkDone.markDone();
  LocalStorage.save();
};

const unMarkDone = (projectName, todoId) => {
  const toMarkDone = getProjectByName(projectName).todos.find(
    (t) => t.id === todoId
  );
  toMarkDone.markNotDone();
  LocalStorage.save();
};

const getTodo = (id, projectName) => {
  const p = getProjectByName(projectName);
  const toFind = p.todos.find((t) => t.id === id);
  return toFind;
};
const editTodo = (title, desc, date, id, projectTitle) => {
  const toEdit = getTodo(id, projectTitle);
  toEdit.setTitle(title);
  toEdit.setDescription(desc);
  toEdit.setDate(date);
  LocalStorage.save();
  return toEdit;
};

const editProject = (oldProjectName, newProjectName, newProjectColor) => {
  const projectToEdit = getProjectByName(oldProjectName);
  projectToEdit.setTitle(newProjectName);
  projectToEdit.setColor(newProjectColor);
  LocalStorage.save();
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
  unMarkDone,
  getTodosByProjectName,
  addTodo,
  editTodo,
  editProject,
  deletedTodos,
  projects,
};
