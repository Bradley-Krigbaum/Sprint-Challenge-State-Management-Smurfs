import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";


const smurfContext = createContext();
// console.log("bk: Index.js: smurfContext: ", smurfContext);

export default smurfContext;


ReactDOM.render(<App />, document.getElementById("root"));
