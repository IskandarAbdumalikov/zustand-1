import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
const App = lazy(() => import("./App.jsx"));

import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import Lazy from "./components/lazy/Lazy.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Lazy />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
