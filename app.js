const todoInput = document.getElementById('todo-input');
const addTaskButtton = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')

// 

//Add a task 
const addTask = () =>{
    const taskText = todoInput.value.trim();
    if(taskText != '') {
        const taskItem = createTaskItem(taskText)
        todoList.appendChild(taskItem)
        todoInput.value = '';
    }
}
//create a new task
const createTaskItem = (taskText) =>{
    const taskItem = document.createElement('li');
    taskItem.className = "todo-item";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox')

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click', deleteTask)

    taskItem.appendChild(checkbox)
    taskItem.appendChild(taskTextSpan)
    taskItem.appendChild(deleteBtn)
    
    return taskItem;
};


// delete task
const deleteTask = (event) =>{
    const taskItem = event.target.parentNode;
    todoList.removeChild(taskItem)
}
// cross out tasks
const toggleTask = (event) =>{
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle('completed')
}
// Event listeners
addTaskButtton.addEventListener('click', addTask)
todoInput.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        addTask()
    }
})

todoList.addEventListener('change', toggleTask)
// Examples of task
const initialTask = ['Go Shopping', 'Attend Meeting', 'Workout'];
initialTask.forEach((task) => {
    const taskItem = createTaskItem(task);
    todoList.appendChild(taskItem)
})