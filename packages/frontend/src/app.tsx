import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "pages/App/index";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
