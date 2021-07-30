const todoIcon = document.querySelector(".todo-icon");
const addBtn = document.querySelector(".add-btn");
const bgImage = document.querySelector(".wrapper__header");
const todoList = document.querySelector(".todo-list");
const todoNumber = document.querySelector(".items");
const cross = document.querySelector(".close");
const todoInput = document.querySelector("#todo-input");

// dark theme switcher
function changeTheme() {
  const formCont = document.querySelector(".form-container");
  const footer = document.querySelector(".footer");
  const container = document.querySelector(".container");
  const moon = "./images/icon-sun.svg";
  const moonImage = "url('./images/bg-desktop-dark.jpg')";
  const sun = "./images/icon-moon.svg";
  const sunImage = "url('./images/bg-desktop-white.jpg')";
  //changing icon and bg image
  if (!todoIcon.classList.contains("active-dark")) {
    todoIcon.src = moon;
    bgImage.style.backgroundImage = moonImage;
    todoIcon.classList.add("active-dark");
  } else {
    todoIcon.src = sun;
    bgImage.style.backgroundImage = sunImage;
    todoIcon.classList.remove("active-dark");
  }
  //changing color according to dark theme into header
  if (!formCont.classList.contains("active-dark")) {
    formCont.classList.add("dark-theme");
    formCont.classList.add("active-dark");
  } else {
    formCont.classList.remove("active-dark");
  }
  //into footer
  if (!footer.classList.contains("active-dark")) {
    footer.classList.add("dark-theme");
    footer.classList.add("active-dark");
  } else {
    footer.classList.remove("active-dark");
  }
  //for list conatiner
  if (!container.classList.contains("active-dark")) {
    container.classList.add("dark-theme");
    container.classList.add("active-dark");
  } else {
    container.classList.remove("active-dark");
  }
}
//adding the task to list and updating span element at footer
const btn = document.querySelector(".add-btn");
const input = document.querySelector("#todo-input");

function addList(e) {
  e.preventDefault();

  var count = 0;
  ++count;
  console.log(count);
  //making a div element
  const div = document.createElement("div");
  div.classList.add("wrapper__body-list");

  const input = document.createElement("input");
  input.setAttribute("type", "radio");
  // input.setAttribute("id", "radio");
  input.className = "checklist";

  const list = document.createElement("li");
  list.className = "text";
  list.innerText = todoInput.value;
  addToLocal(todoInput.value);
 
  const button = document.createElement("button");
  button.className = "close";
  
  const img = document.createElement("img");
  button.innerHTML = "<img src='./images/icon-cross.svg' alt='' />";
  //appendinng all the child to main container
  div.appendChild(input);
  div.appendChild(list);
  div.appendChild(button);
  todoList.insertBefore(div, todoList.childNodes[0]);
  todoNumber.innerText = todoList.children.length - 1;
}
//activating all filter
function filter(e){
  const list = todoList.childNodes;
  list.forEach((item) => {
    const target = e.target;
    switch(target.classList[0]){
      case 'all':
        item.style.display = "flex";
        break;
      case "active":
        const all = document.querySelector(".all");
        if (!item.classList.contains("check")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
      case "completed":
        if (item.classList.contains("check")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
    }
  });
}
//adding to local mean the input text also have to add
function addToLocal(todo) {
  let todos;
  if(localStorage.getItem("list")=== null){
     todos = [];
  } 
  else{
    todos = JSON.parse(localStorage.getItem("list"));
  }
  todos.push(todo);
  localStorage.setItem("list",JSON.stringify(todos));
}



//clear completed activating
todoIcon.addEventListener("click", changeTheme);
btn.addEventListener("click", addList);
// cross.addEventListener("click", removeList);
