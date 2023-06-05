import addTodoForm from "./addTodoForm";

export default function addTodoButton() {
    const btn = document.createElement("btn");

    btn.classList.add("add-todo-btn", "floating");
    btn.innerText = "+";

    btn.onclick = () => {
        const addTodo = addTodoForm();
        document.querySelector(".todo-cards-container").insertAdjacentElement("afterend", addTodo);
        addTodo.scrollIntoView();
    };

    return btn;
}
