import editIcon from "../assets/edit-icon.png";
import deleteIcon from "../assets/remove-icon.png";

export default function todoCard(todo, projectTitle) {
    const { title, description, date, isDone } = todo;

    const card = document.createElement("div");
    const checkboxBtn = document.createElement("button");
    const todoTitle = document.createElement("p");
    const todoDesc = document.createElement("p");
    const todoDate = document.createElement("p");
    const todoProject = document.createElement("p");
    const expandBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const editBtnImg = new Image();
    const deleteBtn = document.createElement("button");
    const deleteBtnImg = new Image();

    const Col1 = document.createElement("div");
    const Col2 = document.createElement("div");
    const Col3 = document.createElement("div");
    const Col4 = document.createElement("div");

    checkboxBtn.type = "button";
    expandBtn.type = "button";
    editBtn.type = "button";
    deleteBtn.type = "button";

    editBtnImg.src = editIcon;
    deleteBtnImg.src = deleteIcon;

    editBtnImg.classList.add("icon");
    deleteBtnImg.classList.add("icon");

    editBtn.appendChild(editBtnImg);
    deleteBtn.appendChild(deleteBtnImg);

    card.setAttribute("data-id", todo.id);
    card.classList.add("todo-card");
    Col1.classList.add("todo-col-1");
    Col2.classList.add("todo-col-2");
    Col3.classList.add("todo-col-3");
    Col4.classList.add("todo-col-4");
    todoTitle.classList.add("todo-title");
    todoDesc.classList.add("todo-desc");
    todoDate.classList.add("todo-date");
    checkboxBtn.classList.add("todo-check-btn");
    expandBtn.classList.add("todo-expand-btn");
    editBtn.classList.add("todo-edit-btn");
    deleteBtn.classList.add("todo-delete-btn");

    todoTitle.innerText = title;
    todoDesc.innerText = description;
    todoDate.innerText = date.toLocaleDateString("en-US");
    todoProject.innerText = projectTitle;

    if (isDone) card.classList.add("done");

    checkboxBtn.onclick = () => card.classList.toggle("done");
    expandBtn.onclick = (e) => {
        card.classList.toggle("expanded");
    };

    Col1.appendChild(checkboxBtn);
    Col2.appendChild(todoTitle);
    Col2.appendChild(todoDate);
    Col2.appendChild(todoDesc);
    Col3.appendChild(todoProject);
    Col4.appendChild(expandBtn);
    Col4.appendChild(editBtn);
    Col4.appendChild(deleteBtn);

    card.appendChild(Col1);
    card.appendChild(Col2);
    card.appendChild(Col3);
    card.appendChild(Col4);

    return card;
}
