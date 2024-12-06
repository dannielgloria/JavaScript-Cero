// Arreglo para almacenar tareas
let tasks = [];

//Funcion para añadir tarea
function addTask(title, description) {
    const task = {
        id: Date.now(), // Id unico para cada tarea el cual obtiene la fecha exacgta y la utiliza como id
        title,
        description
    };
    tasks.push(task)

    renderTask();
}

// Funcion que reenderiza las tareas (Dibuje las tareas en html)
function renderTask(){
    const taskList = document.getElementById("taskList")
    taskList.innerHTML = ""; //limpia la lista de tareas

    tasks.forEach(task => {
        const listItem = document.createElement('li')
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        listItem.innerHTML = `
            <div>
                <h5>${task.title}</h5>
                <p class="mb-1">${task.description}</p>
            </div>
        `;

        taskList.appendChild(listItem);
    });

    console.log(tasks)
}

// manejar el formulario
document.getElementById("taskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;

    addTask(title, description)

    event.target.reset()
})

