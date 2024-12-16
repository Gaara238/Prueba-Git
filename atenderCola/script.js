class Customer {
    constructor(id, name, typeTransaction) {
        this.id = id;
        this.name = name;
        this.typeTransaction = typeTransaction;
    }
}

let tail = [];

let deposit = 0;

let retreat = 0;

let consultation = 0;

function addCustomer() {
    let name = prompt("¿Cual es el nombre del cliente?");
    let typeTransaction = prompt("¿Cual es el tipo de transacción del cliente, deposito, retiro, o consulta?");
    let id = tail.length + 1;
    let customer = new Customer(id, name, typeTransaction);
    tail.push(customer);
    alert("Cliente agregado a la cola");
}

function attendCustomer() {
    if (tail.length > 0) {
        let tailTemp = [];
        let index = null;
        let message = "";
        for (let i = 0; i < tail.length; i++) {
            if (i === 0) {
                index = tail[i];
                if (tail[i].typeTransaction === "Deposito" || tail[i].typeTransaction === "deposito") {
                    deposit++;
                }
                if (tail[i].typeTransaction === "Retiro" || tail[i].typeTransaction === "retiro") {
                    retreat++;
                }
                if (tail[i].typeTransaction === "Consulta" || tail[i].typeTransaction === "consulta") {
                    consultation++;
                }
                message = tail[i].name + ", tipo de transacción: " + tail[i].typeTransaction;
            } else {
                tailTemp.push(tail[i]);
            }
        }
        tail = tailTemp;
        alert(message);
    } else {
        alert("¡No se puede atender a ningun cliente ya que la cola esta vacia si necesita atender a un cliente registrelo usando la opción 1!");
    }
}

function showTail() {
    let alertTemp = "";
    for (let i = 0; i < tail.length; i++) {
        alertTemp = alertTemp + "\n" + tail[i].name + ", tipo de transaccion: " + tail[i].typeTransaction;
    }
    alert("Clientes en la cola:\n" + alertTemp);
}

function summary() {
    let sum = deposit + retreat + consultation;
    alert("Resumen:\nClientes atendidos: " + sum + "\nClientes pendientes: " + tail.length + "\nTransacciones realizadas:\nDeposito: " + deposit + "\nRetiro: " + retreat + "\nConsulta: " + consultation);
}

let exit = false;
while (exit === false) {
    let p = prompt("Elija una opción:\n1.Agregar cliente\n2.Atender cliente\n3.Mostrar cola\n4.Resumen\n5.Salir");
    switch (p) {
        case "1":
            addCustomer();
            break;
        case "2":
            attendCustomer();
            break;
        case "3":
            showTail();
            break;
        case "4":
            summary();
            break;
        case "5":
            exit = true;
            break;
        default:
            alert("El numero que ingreso no equivale a ninguna opción, elija una opción existente");
            break;
    }
}