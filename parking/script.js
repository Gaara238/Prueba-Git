class Vehicle {
  constructor(vip, name, plate, vehicleType) {
    this.vip = vip;
    this.name = name;
    this.plate = plate;
    this.vehicleType = vehicleType;
  }
}

let vehicles = [];

function save() {
  let pr = prompt(
    "Cuanto tiempo se va a quedar en el parqueadero (solo ponga el numero de tiempo)"
  );
  let vip = document.getElementById("vip").value;
  let ownerName = null;
  if (vip === "Si" || vip === "sI" || vip === "SI" || vip === "si") {
    let p = prompt("¿Cual es el codigo VIP?");
    if (p === "53789") {
      vip = true;
    } else {
      vip = false;
      alert("Ese no es el codigo VIP");
    }
  } else if (vip === "No" || vip === "nO" || vip === "NO" || vip === "no") {
    vip = false;
  }
  if (vehicles.length < 1) {
    ownerName = document.getElementById("name").value;
    let plate = document.getElementById("plate").value;
    let vehicleType = document.getElementById("vehicleType").value;
    let vehicle = new Vehicle(vip, ownerName, plate, vehicleType);
    vehicles.push(vehicle);
  } else if (vip) {
    ownerName = document.getElementById("name").value;
    let plate = document.getElementById("plate").value;
    let vehicleType = document.getElementById("vehicleType").value;
    let vehicle = new Vehicle(vip, ownerName, plate, vehicleType);
    vehicles.push(vehicle);
  } else {
    alert("Los parqueaderos disponibles estan llenos");
  }
  cleanInputs();
  exitVehicle(ownerName, parseInt(pr));
}

function showParking() {
  cleanTable();
  let table = document.getElementById("table");
  for (let i = 0; i < vehicles.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    if (vehicles[i].vip) {
      td1.textContent = "SI";
    } else {
      td1.textContent = "NO";
    }
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = vehicles[i].name;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent = vehicles[i].plate;
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    td4.textContent = vehicles[i].vehicleType;
    tr.appendChild(td4);
    table.appendChild(tr);
  }
}

function cleanInputs() {
  document.getElementById("vip").value = "";
  document.getElementById("name").value = "";
  document.getElementById("plate").value = "";
  document.getElementById("vehicleType").value = "";
}

function exitVehicle(name, time) {
  setTimeout(function () {
    console.log("TOY VIVO " + name);
    let vehiclesTemp = [];
    for (let i = 0; i < vehicles.length; i++) {
      if (vehicles[i].name === name) {
        break;
      } else {
        vehiclesTemp.push(vehicles[i]);
      }
    }
    vehicles = vehiclesTemp;
    console.log(vehicles);
  }, time * 1000);
}

function cleanTable() {
  let table = document.getElementById("table");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}
