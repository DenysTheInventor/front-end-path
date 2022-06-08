const createTaskForm = document.querySelector('.create-task-block')
const createTaskInput = document.querySelector('.create-task-block__input')
const taskList = document.querySelector('.tasks-list')

const tasks = [
    {
      id: "1138465078061",
      completed: false,
      text: "Посмотреть новый урок по JavaScript"
    },
    {
      id: "1138465078062",
      completed: false,
      text: "Выполнить тест после урока"
    },
    {
      id: "1138465078063",
      completed: false,
      text: "Выполнить ДЗ после урока"
    }
]

const addTask = (id, text) => {
    const task = {
        'id': id,
        'text': text
    }
    tasks.push(task)
    renderTasks(task)
}

const renderTasks = (task) => {
    taskList.innerHTML += `
    <div class="task-item" data-task-id="${task.id}">
        <div class="task-item__main-container">
            <div class="task-item__main-content">
                <form class="checkbox-form">
                    <input class="checkbox-form__checkbox" type="checkbox" id="${task.id}">
                <label for="${task.id}"></label>
                </form>
                <span class="task-item__text">${task.text}</span>
            </div>
            <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
                Удалить
            </button>
        </div>
    </div>
    `
}

tasks.forEach((task) => {
    renderTasks(task)
})



createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const taskText = createTaskInput.value
    addTask(String(Date.now()), taskText)
})