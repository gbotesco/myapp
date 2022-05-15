// getting required element
const inputArea = document.querySelector('.inputField input');
const inputBtn = document.querySelector('.inputField button');
const taskList = document.querySelector('.taskList');
const pendingTask = document.querySelector('.pendingTask');
const deleteAllBtn = document.querySelector('.footer button')







// inputArea.onkey =()=>{
//     //data enter by user
//     if(userData.trim() !=0){
//         inputBtn.classList.add('active');
//     }else{
//         inputBtn.classList.remove('active');
//     }
//     }

inputBtn.onclick=()=>{
    let userData = inputArea.value;
    let getLocalStorage = localStorage.getItem("New task");//localStorage
    if(getLocalStorage == null){
        listArr = [ ]; // create empty a array
    }else{
        listArr = JSON.parse(getLocalStorage);// creating an array of task
    }
    listArr.push(userData);
    localStorage.setItem("New task", JSON.stringify(listArr));//update localStorage
    showTask();
}

function showTask(){

    let getLocalStorage = localStorage.getItem("New task");//localStorage
    pendingTask.textContent= listArr.length;
    if(getLocalStorage == null){
        listArr = [ ];
    }else{
        listArr = JSON.parse(getLocalStorage);// creating an array of task
    }
    let newTaskList = "";
    listArr.forEach((element, index)=>{
        newTaskList += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`

    })
    taskList.innerHTML = newTaskList;
    inputArea.value =" ";

}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New task");//localStorage
    listArr = JSON.parse(getLocalStorage);// creating an array of task
    listArr.splice(index, 1);
    localStorage.setItem("New task", JSON.stringify(listArr));//update localStorage
    showTask();
}
deleteAllBtn.onclick=()=>{
    listArr =[];
    localStorage.setItem("New task", JSON.stringify(listArr));//update localStorage
    showTask();
}