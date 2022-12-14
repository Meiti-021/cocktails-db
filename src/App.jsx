import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./navbar";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<>i'm home</>} />
          <Route path="/about" element={<>i'm about</>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
