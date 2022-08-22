const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));

    saveTodos(toDos);
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodo.id;
    button.innerText = "X";
    span.innerText = newTodo.text;

    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function hanndleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", hanndleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach((item) => paintTodo(item));
}