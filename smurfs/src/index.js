import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

export const smurfContext = createContext();
// console.log("bk: Index.js: smurfContext: ", smurfContext);



ReactDOM.render(
    <smurfContext.Provider >
        <App />
    </smurfContext.Provider>, 
    document.getElementById("root"));
