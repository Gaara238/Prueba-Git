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
    let status = false;
    let task = new Task(id, p, status);
    schedulerOfTasks.push(task);
    alert("Tarea agregada");
}

function listTasks() {
    let item = "";
    let itemA = [];
    for (let i = 0; i < schedulerOfTasks.length; i++) {
        if (schedulerOfTasks.status === false) {
            item = schedulerOfTasks[i].id + ". [Completada] " + schedulerOfTasks[i].description;
            itemA.push(item);
        } else {
            item = schedulerOfTasks[i].id + ". [Pendiente] " + schedulerOfTasks[i].description;
            itemA.push(item);
        }
    }
    alert("Tareas:\n\n " + JSON.stringify(itemA));
}

function checkTaskComplete() {
    let p = parseInt(prompt("Ingrese el id de la tarea a marcar como completada"));
    for (let i = 0; i < schedulerOfTasks.length; i++) {
        if (p <= schedulerOfTasks.length) {
            if (schedulerOfTasks[i].id === p) {
                if (schedulerOfTasks[i].status === true) {
                    schedulerOfTasks.status = false;
                    alert("Tarea completada");
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
    alert("Tarea eliminada");
}

function programExit() {
    alert("Gracias por usar Gestor de tareas");
}

let exit = false
while (exit === false) {
    let p1 = prompt("Gestor de tareas\n Seleccione una opcion:\n\n 1.Agregar tarea\n 2.Listar tareas\n 3.Marcar tarea como completada\n 4.Eliminar tarea\n 5.Salir del programa");
    switch (p1) {
        case "1":
            addTask();
            break;
        case "2":
            listTasks();
            break;
        case "3":
            checkTaskComplete();
            break
        case "4":
            deleteTask();
            break;
        case "5":
            programExit();
            exit = true;
            break;
        default:
            alert("Ese número no equivale a ninguna opción");
            break;
    }
}