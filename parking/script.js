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
  let vip = document.getElementById("vip").value;
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
  if (vehicles.length < 2) {
    let ownerName = document.getElementById("name").value;
    let plate = document.getElementById("plate").value;
    let vehicleType = document.getElementById("vehicleType").value;
    let vehicle = new Vehicle(vip, ownerName, plate, vehicleType);
    vehicles.push(vehicle);
  } else if (vip) {
    let ownerName = document.getElementById("name");
    let plate = document.getElementById("plate");
    let vehicleType = document.getElementById("vehicleType");
    let vehicle = new Vehicle(vip, ownerName, plate, vehicleType);
    vehicles.push(vehicle);
  } else {
    let p2 = prompt(
      "Los parqueaderos disponibles estan llenos, puede esperar a que se desocupe uno o se puede ir \n 1. Esperar\n 2. Irse"
    );
  }
  cleanInputs();
}

function showParking() {
  let table = document.getElementById("table");
  for (let i = 0; i < vehicles.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    if (vehicles[i].vip) {
      vehicles[i].vip = "SI";
    } else {
      vehicles[i].vip = "NO";
    }
    td1.textContent = vehicles[i].vip;
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
