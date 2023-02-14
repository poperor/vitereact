import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import Counter from "./pages/counter";
import Events from "./pages/events";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teller" element={<Counter />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
