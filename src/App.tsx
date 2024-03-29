import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import {HomeScreen} from "./pages";


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
  );
}

export default App;
