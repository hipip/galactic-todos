import header from "../components/header.js";
import sidebar from "../components/sidebar.js";
import homeCard from "../components/homeCard.js";
import { getTodosCount, getCompletedTodosCount, getProjectsCount, getTodaysTodos, getWeekTodos } from "./todoController.js";
import todoCard from "../components/todoCard.js";
import Project from "../classes/Project.js";
import addTodoButton from "../components/addTodoButton.js";

function dashboard() {
    const cont = document.createElement("div");
    const pageTitle = document.createElement("h1");
    const pageSubTitle = document.createElement("h2");
    const cardsContainer = document.createElement("div");
    const todosCreatedCard = homeCard("Todos Created", getTodosCount(), "#1020FF");
    const todosCompletedCard = homeCard("Todos Completed", getCompletedTodosCount(), "#10FF10");
    const projectsCreatedCard = homeCard("Projects Created", getProjectsCount(), "#FFFFAA");
    const todosDeletedCard = homeCard("Todos Deleted", "76", "#EE0542");

    pageTitle.classList.add("page-title");
    pageSubTitle.classList.add("page-sub-title");
    cardsContainer.classList.add("dashboard-cards-container");

    pageTitle.textContent = "Dashboard";
    pageSubTitle.textContent = "Welcome Productive Human !";

    todosCreatedCard.style.animationDelay = "0.1s";
    todosCompletedCard.style.animationDelay = "0.2s";
    projectsCreatedCard.style.animationDelay = "0.3s";
    todosDeletedCard.style.animationDelay = "0.4s";

    cardsContainer.appendChild(todosCreatedCard);
    cardsContainer.appendChild(todosCompletedCard);
    cardsContainer.appendChild(projectsCreatedCard);
    cardsContainer.appendChild(todosDeletedCard);

    cont.setAttribute("id", "dashboard");

    cont.appendChild(pageTitle);
    cont.appendChild(pageSubTitle);
    cont.appendChild(cardsContainer);

    return cont;
}

function renderPage(project) {
    const content = document.querySelector(".content");
    if (content) Array.from(content.children).forEach((child) => child.remove());

    var { title, color, todos } = project;

    const cont = document.createElement("div");
    const pageTitle = document.createElement("h1");
    const pageSubTitle = document.createElement("h2");
    const cardsContainer = document.createElement("div");

    cont.classList.add("page");
    pageTitle.classList.add("page-title");
    pageSubTitle.classList.add("page-sub-title");
    cardsContainer.classList.add("todo-cards-container");

    if (project instanceof Project) {
        title = project.title;
        color = project.color;
        todos = project.todos;
        cont.appendChild(addTodoButton());
    } else if (project === "Today") {
        title = "Today";
        color = "rgba(0,0,0,.7)";
        todos = getTodaysTodos();
    } else if (project === "Week") {
        title = "Week";
        color = "rgba(0,0,0,.7)";
        todos = getWeekTodos();
    }

    if (todos) {
        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            const newTodoCard = todoCard(todo, project === "Today" || project === "Week" ? todo.project : project.title);
            newTodoCard.style.animationDelay = `0.${i + 3}s`;
            cardsContainer.appendChild(newTodoCard);
        }
    }

    pageTitle.textContent = title;
    pageSubTitle.textContent = "No Todos Found in this project";

    cont.setAttribute("id", title);

    cont.appendChild(pageTitle);
    if (!todos || !todos.length) cont.appendChild(pageSubTitle);
    cont.appendChild(cardsContainer);

    content.appendChild(cont);

    document.body.style.backgroundImage = `linear-gradient(${color},rgba(0,0,0,.5) 70%), url('https://somehowalive.github.io/todo-list/5bc290a3663f721eb0cb.jpg')`;
}

export default function init() {
    const BODY = document.body;
    const Header = header();
    const Sidebar = sidebar();
    const main = document.createElement("main");
    const content = document.createElement("div");

    main.classList.add("main");

    content.classList.add("content");
    content.appendChild(dashboard());

    main.appendChild(Sidebar);
    main.appendChild(content);

    BODY.append(Header);
    BODY.appendChild(main);
}

export { renderPage, dashboard };
