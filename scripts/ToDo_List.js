const todoList = [{name:'Home Work', dueDate:'25-01-2025'}];

function renderTodoList() {
    let todoHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        //const todoObject = todoList[i];
        const {name, dueDate} = todoList[i];
        const html = `
        <div>${name}</div>

        <div>${dueDate}</div>  

        <button class="delete-button"
        onclick="todoList.splice(${i}, 1); renderTodoList();">Delete
        </button>`;

        todoHTML += html;
    }
    document.querySelector('.show-todo').innerHTML = todoHTML;

}

function todofunc() {
    const inputElement = document.querySelector('.todo-input');
    const dateInputElement = document.querySelector('.js-dueDateInput');
    const name = inputElement.value;
    const dueDate = dateInputElement.value;

    todoList.push({name, dueDate});
    renderTodoList();
    inputElement.value = '';
}