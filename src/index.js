import React from "react";
//import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

// After
import { createRoot } from 'react-dom/client';
const contar = document.getElementById('root');
const root = createRoot(contar); // createRoot(container!) if you use TypeScript
root.render(<App  />);