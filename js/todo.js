const todoUL = document.querySelector('.todo-list');
const addTodoInput = document.querySelector('.add-todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoWrap = document.querySelector('.todo-wrap');

/* **************** */
function toggleCheckedForLI(event) {
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
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.textContent = newTodo;
  createCloseBtn(li);
  todoUL.appendChild(li);
}

function toggleShowTodoList() {
  todoWrap.classList.toggle('visible');
}
/* **************** */
todoUL.addEventListener('click', toggleCheckedForLI);
addTodoInput.addEventListener('change', createNewTodo);
todoBtn.addEventListener('click', toggleShowTodoList);
