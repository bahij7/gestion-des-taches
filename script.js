let addTask = document.getElementById('addTask');
let taskList = document.getElementById('taskList');
let taskInput = document.getElementById('taskInput');
let taskForm = document.getElementById('taskForm');

addTask.addEventListener('click', (e)=>{
e.preventDefault()


const taskText = taskInput.value.trim();

if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText
    taskList.appendChild(newTask)
    taskInput.value = ''
}
});
