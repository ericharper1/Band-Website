import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Header } from "./Components/Header/Header";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" render={() => <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
