const list = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("#toDo");

if (localStorage.toDos) {
  list.innerHTML = localStorage.toDos;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const toDo = document.createElement("li");
  const button = document.createElement("button");

  toDo.innerText = " " + input.value;
  button.innerText = "X";
  toDo.prepend(button);
  list.append(toDo);
  input.value = "";
  localStorage.setItem("toDos", list.innerHTML);
});

list.addEventListener("click", function (e) {
  //   console.log(e);
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.style.textDecoration === ""
      ? (e.target.style.textDecoration = "line-through")
      : (e.target.style.textDecoration = "");
  }
  localStorage.setItem("toDos", list.innerHTML);
});
