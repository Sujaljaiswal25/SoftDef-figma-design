import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ProductProvider } from "./context/ProductContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductProvider>
  </BrowserRouter>
);
