import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";  // optional

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



// sabse basic way of routing using framework ok.....


// Routing ke liye sabse phle install kiya  npm install react-router-dom
// then uske baad main.jsx  import ReactDOM from "react-dom/client"; and app ko <BrowserRouter> <App/></BrowserRouter> enclose kiiya 
// uske baad app.jsx mai routes set kiye hai 
// uske baad navbar mai jake btns ko component={link} to="/path" dediya hai 
