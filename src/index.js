import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    //<StrictMode>
        <App />
    //</StrictMode>
);

// ReactDOM.render(  // React 17
// <React.StrictMode>
//     <App />
// </React.StrictMode>,
// document.getElementById('root')
// );