import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";
const element = <h1>Hii This is Rishi Mukherjee</h1>;
//console.log(element);
//ReactDom.render(element, document.getElementById("root"));
ReactDom.render(<Counter />, document.getElementById("new"));
