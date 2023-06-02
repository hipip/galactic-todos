import header from "../components/header.js";
import sidebar from "../components/sidebar.js";
import homeCard from "../components/homeCard.js";
import { getTodosCount, getCompletedTodosCount, getProjectsCount } from "./todoController.js";

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
