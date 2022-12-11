document.addEventListener("DOMContentLoaded", () => {

  const submit = document.getElementById('create-task-form');
  const dropDownStatus = document.getElementById("priority");
  const clicking = document.getElementById('tasks');
  const button1 = document.getElementById('button1');
  const tasksArr = [];

  button1.addEventListener('click', renderAscending);
  button2.addEventListener('click', renderDescending);
  


  dropDownStatus.addEventListener('change', function(event){
    dropDownStatus.className = priorityColor(dropDownStatus.value)
  })

  submit.addEventListener('submit', handleSubmit);

  clicking.addEventListener('click',function(event){
    console.log(`${event.target.innerText} has been removed`)
    event.target.remove();

  })


function priorityColor(priority){
  switch(priority){
    case "high":
      return "red"
    case "medium":
      return "orange"
    case "low":
      return "green"
    default: return;
  }
}

function handleSubmit(event){
  event.preventDefault();
  const ul = document.getElementById('tasks')
  const li = document.createElement('li')
  li.innerText = document.getElementById('new-task-description').value;
  li.name = document.getElementById('asign-to').value;
  li.className = priorityColor(dropDownStatus.value)
  
  
  ul.append(li)
  const objectOfTasks = {task: li.innerText, priority: dropDownStatus.value};
  tasksArr.push(objectOfTasks);
  console.log(objectOfTasks);
  console.log(tasksArr);
  console.log(li.name);

  event.target.reset();
}

function renderTasks(){
  //clear UL
  const ul = document.getElementById('tasks')
  while(ul.firstChild) ul.removeChild(ul.firstChild);
  // iterate over tasks priority

  //iterating the array and adding a numerical value Order depending on their priority
  for (const priorities of tasksArr){
      if (priorities.priority === "high"){
        priorities.order = 1;

      }else if (priorities.priority === "medium"){
        priorities.order = 2;

          } else if (priorities.priority === "low"){
            priorities.order = 3;

            }
          }
 
}


function renderAscending(){

  renderTasks();
  tasksArr.sort(function(a,b){
    return a.order - b.order;
  });
  console.log(tasksArr);
  printOrderedTasks(tasksArr);
          
}


function renderDescending(){

  renderTasks();
  tasksArr.sort(function(a,b){
    return b.order - a.order;
  });
  console.log(tasksArr);
  printOrderedTasks(tasksArr);
          

}




function printOrderedTasks (array){

  for (let i=0 ; i< array.length ; i++){

    const ul = document.getElementById('tasks')
    const li = document.createElement('li')
    li.className = priorityColor(array[i].priority);
    li.innerText = array[i].task;
    ul.append(li)


  }

}

});