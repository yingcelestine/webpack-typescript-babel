import { Value } from "./value";
const value = new Value();
value.setValue(1000);
value.getValue();

const value1 = new Value()
value1.setProps({ x: 1000, y: 1000 });
value1.getProps();

const elem = document.createElement("h3");
elem.innerText = "Ying Liu";
document.body.appendChild(elem);
