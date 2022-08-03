//console.log(typeof document.getElementById("ul1"));

//const a = document.getElementById("headElement");
//console.log(a.textContent);//display text of selected element

//const lst = document.querySelector(".tasks");
// console.log(lst.innerHTML); //inner code of element
//lst.innerHTML += "<li>2nd task</li>"; // will add another task

const formtodo = document.querySelector(".form-todo");
const data = document.querySelector(".form-todo input[type='text']");
const spanSec = document.querySelector(".tasks");
formtodo.addEventListener("submit", (e) => {
    e.preventDefault();  // if we don't want ro refresh the page on submit
    const tasks = data.value;
    const newLi = document.createElement("li");
    const newLiinhtml = `<span>${tasks}</span>
        <div class="taskbtn">
            <button class="tbtn done">Done</button> 
            <button class="tbtn remove">Remove</button>
        </div>`;
    newLi.innerHTML= newLiinhtml;
    spanSec.append(newLi);
    data.value = "";
});

spanSec.addEventListener("click", (e) => {
    //console.log(e.target.classList);
    if(e.target.classList.contains("done")){
        const spanli = e.target.parentNode.previousElementSibling;
        spanli.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const spanli = e.target.parentNode.parentNode;
        spanli.remove();
    }
    
});