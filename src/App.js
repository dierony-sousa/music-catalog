import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

import Home from "./components/Home";
import Gender from "./components/Gender";
import AlbumDetail from "./components/AlbumDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Catálogo de Músicas</h1>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gender/:genderId" element={<Gender />} />
            <Route path="/album/:albumId" element={<AlbumDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
