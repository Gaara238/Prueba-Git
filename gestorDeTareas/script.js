class Task {
    constructor(id, description, status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }
}

let schedulerOfTasks = [];

function addTask() {
    let p = prompt("Ingrese la descripción de la tarea");
    let id = schedulerOfTasks.length + 1;
    let task = new Task(id, p, false);
    schedulerOfTasks.push(task);
}

function listTasks() {
    let item = "";
    let itemA = [];
    for (let i = 0; i < schedulerOfTasks.length; i++) {
        if (schedulerOfTasks.status === false) {
            item = schedulerOfTasks[i].id + ". [Pendiente] " + schedulerOfTasks[i].description;
            itemA.push(item);
        } else {
            item = schedulerOfTasks[i].id + ". [Completada] " + schedulerOfTasks[i].description;
            itemA.push(item);
        }
    }
    alert(JSON.stringify(itemA));
}

function checkTaskComplete() {
    let p = prompt("Ingrese el id de la tarea a marcar como completada");
    for (let i = 0; i < schedulerOfTasks.length; i++) {
        if (p <= schedulerOfTasks) {
            if (schedulerOfTasks[i].id === p) {
                if (schedulerOfTasks[i].status === false) {
                    schedulerOfTasks.status = true;
                } else {
                    alert("Esta tarea ya esta marcada como completada");
                }
            }
        } else {
            alert("Este id no equivale a ninguna tarea");
        }
    }
}

function deleteTask() {
    let p = prompt("Ingrese el id de la tarea a eliminar");
    let schedulerOfTasksTemp = [];
    let index = null;
    for (let i = 0; i < schedulerOfTasks.length; i++) {
        if (p <= schedulerOfTasks) {
            if (schedulerOfTasks[i].id === p) {
                index = schedulerOfTasks[i];
            } else {
                schedulerOfTasksTemp.push(schedulerOfTasks[i]);
            }
        }
    }
    schedulerOfTasks = schedulerOfTasksTemp;
}

let p1 = null;
while (p1 !== 5) {
    p1 = prompt
}