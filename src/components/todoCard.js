export default function todoCard(todo) {
    const { title, description, date, isDone } = todo;

    const card = document.createElement("div");
    const checkboxBtn = document.createElement("button");
    const todoTitle = document.createElement("p");
    const todoDesc = document.createElement("p");
    const todoDate = document.createElement("p");
    const todoProject = document.createElement("p");
    const expandBtn = document.createElement("button");
    const Col1 = document.createElement("div");
    const Col2 = document.createElement("div");
    const Col3 = document.createElement("div");
    const Col4 = document.createElement("div");

    checkboxBtn.type = "button";
    expandBtn.type = "button";

    card.classList.add("todo-card");
    Col1.classList.add("todo-col-1");
    Col2.classList.add("todo-col-2");
    Col3.classList.add("todo-col-3");
    Col4.classList.add("todo-col-4");
    todoTitle.classList.add("todo-title");
    todoDesc.classList.add("todo-desc");
    todoDate.classList.add("todo-date");
    todoProject.classList.add("todo-project");
    checkboxBtn.classList.add("todo-check-btn");
    expandBtn.classList.add("todo-expand-btn");

    todoTitle.innerText = title;
    todoDesc.innerText = description;
    todoDate.innerText = date;
    todoProject.innerText = "Work";

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

    card.appendChild(Col1);
    card.appendChild(Col2);
    card.appendChild(Col3);
    card.appendChild(Col4);

    return card;
}
