let addBtn = document.querySelector(".addBtn");
let activeCont = document.querySelector(".active-task-cont");
let completedCont = document.querySelector(".completed-cont");
let activeTasks = document.querySelector(".active-tasks");
let CompletedTasks = document.querySelector(".completed-tasks");
let inputTask = document.querySelector(".input-task");
let textarea = document.querySelector("textarea");
let container = document.querySelector(".container");

var ipToggle = true;

addBtn.addEventListener("click", ()=>{
    if(ipToggle){
        textarea.classList.remove("invisible");
        textarea.classList.add("input-task");
        ipToggle = false;
    }
    else{
        textarea.classList.remove("input-task");
        textarea.classList.add("invisible");
        ipToggle = true;

    }
});

textarea.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        let text = textarea.value.trim();
        textarea.value = "";
        textarea.classList.add("invisible");
        ipToggle = true;
        createTask(text);
    }
});


completedCont.addEventListener("click", () => {
    activeTasks.classList.add("invisible");
    CompletedTasks.classList.remove("invisible");
    if(container.classList.length > 1){
        container.classList.remove("green", "red");
    }
    container.classList.add("green"); 
});


activeCont.addEventListener("click", () => {
    activeTasks.classList.remove("invisible");
    CompletedTasks.classList.add("invisible");
    if(container.classList.length > 1){
        container.classList.remove("green", "red");
    }
    container.classList.add("red");
});



function createTask(text){
    if(text!=""){
        let task = document.createElement("li");
        task.classList.add("list");
        task.innerHTML = ` <div class="check">
                                    <i class="fa fa-check"></i>
                            </div>
                            <div class="data"> ${text} </div>
                            <div class="deleteTask">
                                    <i class="fa fa-trash"></i>
                            </div> `;

        handleRemoval(task);
        handleCompletion(task);
        activeTasks.appendChild(task);
    }
}



function handleRemoval(task){
    let deleteTasks = task.querySelector(".deleteTask");
        deleteTasks.addEventListener("click", function(){
            task.remove();
        });
}

function handleCompletion(task){
    let check = task.querySelector(".check");
    let data = task.querySelector(".data");
    let deleteTask = task.querySelector(".deleteTask");
    let newLi =  document.createElement("li");
    newLi.classList.add("list");
    data = data.outerHTML;
    deleteTask = deleteTask.outerHTML;
    newLi.innerHTML = data + deleteTask;


    check.addEventListener("click", function(){
        handleRemoval(newLi);
        CompletedTasks.appendChild(newLi);
        task.remove();
    });
}

