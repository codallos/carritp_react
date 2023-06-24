import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProveedorcontextoListadoProductosCarrito } from "./context/listadoProductosCarrito";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ProveedorcontextoListadoProductosCarrito>
            <App />
        </ProveedorcontextoListadoProductosCarrito>
    </React.StrictMode>
);
