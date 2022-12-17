import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./detail";
import Home from "./Home";
import Nav from "./navbar";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/about" element={<>i'm about</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
