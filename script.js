const $addTodo = document.getElementById("addTodo");
const $todoList = document.getElementById("todoList");

$addTodo.addEventListener("keypress", (e) => {
  if (e.code === "Enter" && e.target.value !== "") {
    // console.log(e.target.value);

    let todo = e.target.value.trim();
    // console.log(todo);

    if (!todo) {
      alert("Please enter a valid task.");
      return;
    }

    let $todoItem = document.createElement("li");

    let dynamicId = new Date().getTime();

    $todoItem.innerHTML = `
          <input id="${dynamicId}" type="checkbox" />
          <label for="${dynamicId}">${todo}</label>
    `;
    $todoList.appendChild($todoItem);
    // console.log($todoItem);
    $addTodo.value = "";
  }
});

$todoList.addEventListener("click", (e) => {
  if (e.target.checked) {
    e.target.parentElement.style.textDecoration = "line-through";
  } else {
    e.target.parentElement.style.textDecoration = "none";
  }
});
