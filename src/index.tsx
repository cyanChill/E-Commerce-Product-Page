import React from "react";
import ReactDOM from "react-dom/client";

import { CartProvider } from "./context/cartContext";
import { ResizeProvider } from "./context/resizeContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CartProvider>
      <ResizeProvider>
        <App />
      </ResizeProvider>
    </CartProvider>
  </React.StrictMode>
);
