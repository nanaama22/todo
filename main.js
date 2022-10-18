function showTodoOnTheScreen (todo) {
    const listOfTodo = document.querySelector("#todo__list");
    const li = document.createElement("li");
    li.classList.add("todo__section--todoItem")
  
    li.innerHTML = `<div>
    <input class="todo__checkbox" type="checkbox" />
    <span class="todo__text"> ${todo} </span>
    <div class="todo__actions--wrapper">
      <button onclick={trial()} id="edit_btn" class="todo__actions edit__btn">
        edit
      </button>
      <button id="delete_btn" class="todo__actions delete__btn">
        delete
      </button>
    </div>
  </div>`
  
    listOfTodo.appendChild(li)
  }
  
  function todoFormSumbitHandler(e) {
    e.preventDefault();
    const inputField = document.querySelector("#todo__input");
    const todoValue = inputField.value;
  
    showTodoOnTheScreen(todoValue)
  }
  
  const todoForm = document.getElementById("form")
  todoForm.addEventListener('submit', todoFormSumbitHandler)
  
