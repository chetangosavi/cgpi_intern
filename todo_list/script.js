const inputBox=document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        li.addEventListener('dblclick', function () {
            const newText = prompt("Edit your task:", li.childNodes[0].textContent.trim());
        
            if (newText !== null && newText.trim() !== '') {
                li.childNodes[0].textContent = newText; 
                saveData();
            }
        });
        

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "×"; 
        span.addEventListener('click', function () {
            li.remove();
            saveData();
        });

        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

function filterTasks(status) {
    const tasks = document.querySelectorAll("#list-container li");

    tasks.forEach(task => {
        switch (status) {
            case 'all':
                task.style.display = "flex";
                break;

            case 'completed':
                task.classList.contains("checked")
                    ? (task.style.display = "flex")
                    : (task.style.display = "none");
                break;

            case 'pending':
                task.classList.contains("checked")
                    ? (task.style.display = "none")
                    : (task.style.display = "flex");
                break;
        }
    });
}


listContainer.addEventListener("click" ,function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();