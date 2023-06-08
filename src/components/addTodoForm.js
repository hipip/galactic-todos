import Todo from "../classes/Todo.js";
import { addTodo, editTodo } from "../controllers/todoController.js";
import todoCard, { updateTodos } from "./todoCard.js";

function closeForm(form) {
    form.classList.add("slide-out");
    setTimeout(() => {
        form.remove();
    }, 450);
}
export default function addTodoForm(todo = null) {
    const form = document.createElement("form");
    const formTitle = document.createElement("p");
    const r1 = document.createElement("div");
    const todoTitleLabel = document.createElement("label");
    const todoTitleInput = document.createElement("input");
    const r2 = document.createElement("div");
    const todoDescriptionLabel = document.createElement("label");
    const todoDescriptionInput = document.createElement("textarea");
    const r3 = document.createElement("div");
    const projectSelectLabel = document.createElement("label");
    const projectSelect = document.createElement("select");
    const currentProjectOption = document.createElement("option");
    const r4 = document.createElement("div");
    const todoDateLabel = document.createElement("label");
    const todoDateInput = document.createElement("input");
    const r5 = document.createElement("div");
    const submitBtn = document.createElement("button");
    const closeBtn = document.createElement("button");
    var mode = "add";

    if (todo) {
        mode = "edit";
        todoTitleInput.value = todo.title;
        todoDescriptionInput.value = todo.description;
    } else {
        todoTitleInput.placeholder = "enter task title";
        todoDescriptionInput.placeholder = "add a description for you task here!";
    }
    form.classList.add(mode + "-todo-form");
    formTitle.classList.add(mode + "-todo-form-title");
    todoTitleInput.classList.add("inp");
    todoDescriptionInput.classList.add("inp", mode + "-todo-desc");
    todoDateInput.classList.add("inp");
    submitBtn.classList.add(mode + "-todo-form-submit-btn");
    closeBtn.classList.add(mode + "-todo-form-close-btn");
    r1.classList.add("inp-cont");
    r2.classList.add("inp-cont");
    r3.classList.add("inp-cont");
    r4.classList.add("inp-cont");
    r5.classList.add("inp-cont");

    todoTitleInput.type = "text";
    todoDateInput.type = "date";
    submitBtn.type = "button";
    closeBtn.type = "button";

    formTitle.innerText = todo ? "Edit Task" : "Add new Task";
    todoTitleLabel.innerText = "Title";
    todoDescriptionLabel.innerText = "Details";
    projectSelectLabel.innerText = "Project";
    todoDateLabel.innerText = "Date";
    closeBtn.innerText = "x";
    submitBtn.innerText = todo ? "Save" : "Add";

    if (!todo) {
        const today = new Date();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        if (month < 10) month = "0" + "" + month;
        if (day < 10) day = "0" + day;
        todoDateInput.value = `${today.getFullYear()}-${month}-${day}`;
    } else {
        todoDateInput.value = todo.date.toISOString().split("T")[0];
    }

    closeBtn.onclick = () => {
        if (todo) form.previousElementSibling.style.display = "grid";
        closeForm(form);
    };
    submitBtn.onclick = () => {
        const title = todoTitleInput.value.trim();
        const desc = todoDescriptionInput.value;
        const date = new Date(todoDateInput.value);

        if (todo) {
            console.log("logic for editing task");
            if (title && date) {
                const id = todo.id;
                const projectName = document.querySelector(".page").getAttribute("id");
                console.log(projectName);
                const newTodo = new Todo(title, desc, date);
                editTodo(newTodo, id, projectName);
                updateTodos();
            }
        } else {
            if (title && date) {
                const todo = new Todo(title, desc, date);
                const projectName = document.querySelector(".page").getAttribute("id");
                addTodo(todo, document.querySelector(".page").getAttribute("id"));
                document.querySelector(".todo-cards-container").appendChild(todoCard(todo, projectName));
                closeForm(form);
            }
        }
    };

    r1.appendChild(todoTitleLabel);
    r1.appendChild(todoTitleInput);

    r2.appendChild(todoDescriptionLabel);
    r2.appendChild(todoDescriptionInput);

    r3.appendChild(projectSelectLabel);
    r3.appendChild(projectSelect);

    r4.appendChild(todoDateLabel);
    r4.appendChild(todoDateInput);

    r5.appendChild(submitBtn);

    form.appendChild(formTitle);
    form.appendChild(r1);
    form.appendChild(r2);
    // form.appendChild(r3);
    form.appendChild(r4);
    form.appendChild(r5);
    form.appendChild(submitBtn);
    form.appendChild(closeBtn);

    return form;
}
