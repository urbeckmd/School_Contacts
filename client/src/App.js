import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SchoolPage from "./components/SchoolPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school/:id" element={<SchoolPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
