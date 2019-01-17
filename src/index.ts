// import { VehicalType } from "./vehicaltype";
// import { Value } from "./value";
// import { Student } from "./student";
// import { VehicalType } from "./vehicaltype";
// import { monuments, compareMonuments } from "./typedarrays"
import { MyOptions } from "./manualtypevariation";

// const elem = document.createElement("h3");
// const v = new Value();
// v.setValue(1000);
// console.log(v.getValue("xxx"));
// console.log(v.getValue("ajfkds;lajfkd"));

// const value1 = new Value()
// value1.setProps({ x: 1000, y: 1000 });
// value1.getProps();

// const student = new Student("Ying", "Y", "Liu");
// // <h3>.... </h3>
// elem.innerText = student.fullName;

// const type: number = VehicalType.Bike;
// const typeName: string = VehicalType[type];
// console.log("VehicalType.Bus: ", type);
// elem.innerText = typeName;

// monuments.sort(compareMonuments);
// const table = document.createElement("table");
// table.classList.add("pure-table");
// let header = table.createTHead()
// let row = header.insertRow();
// let cell0 = row.insertCell();
// let cell1 = row.insertCell();
// cell0.innerText = "Name";
// cell1.innerText = "Height"
// monuments.forEach((m) => {
//     let row = table.insertRow();
//     let cell0 = row.insertCell();
//     let cell1 = row.insertCell();
//     cell0.innerText = m.name;
//     cell1.innerText = `${m.heightInMeters}`;
// });
// document.body.appendChild(table);

const myopt = new MyOptions("cloth", true);
myopt.setMaterial("steel");