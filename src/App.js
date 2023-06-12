import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PageTwo from "./pages/PageTwo";
import { Chart } from "chart.js";
import axios from "axios";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-two" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
