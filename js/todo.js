const todoUL = document.querySelector('.todo-list');
const addTodoInput = document.querySelector('.add-todo-input');
const addTodoBtn = document.querySelector('.add-todo-btn');
const todoErrorEl = document.querySelector('.todo-error');

/* **************** */
function toogleCheckedForLI(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}

function deleteTodo() {
  const todoLI = this.parentElement;
  todoLI.style.display = 'none';
  this.style.display = 'none';
}

function createCloseBtn(parrentEl) {
  const button = document.createElement('button');
  button.classList.add('icon');
  button.classList.add('close');
  button.addEventListener('click', deleteTodo);
  parrentEl.appendChild(button);
}

function createNewTodo() {
  const newTodo = addTodoInput.value;
  addTodoInput.value = '';
  if (!newTodo) {
    todoErrorEl.textContent = 'Error: enter todo!';
  } else {
    todoErrorEl.textContent = '';
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.textContent = newTodo;
    createCloseBtn(li);
    todoUL.appendChild(li);
  }
}
/* **************** */
todoUL.addEventListener('click', toogleCheckedForLI);
addTodoBtn.addEventListener('click', createNewTodo);
