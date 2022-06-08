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

const showModal = (text) => {
    const errorModal = document.createElement('span')
          errorModal.className = 'error-message-block'
          errorModal.innerText = text
    
    createTaskForm.append(errorModal)
}

const addTask = (id, text) => {
    document.querySelector('.error-message-block') ? document.querySelector('.error-message-block').remove() : console.log('No alert window in scope')

    if (text === '') {
        showModal('Название задачи не должно быть пустым')
        return
    }
    else if (tasks.find(task => task.text === text)) {
        showModal('Задача с таким названием уже существует.')
        return
    } 

    const task = {
        'id': id,
        'text': text,
        'completed': false
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
    
    const taskText = createTaskInput.value.trim()
    addTask(String(Date.now()), taskText)
})

