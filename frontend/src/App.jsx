import React from "react";
import {Routes, Route} from 'react-router-dom'
import './index.css'
import Dashboard from "./routes/Dashboard";
import Generate from "./routes/Generate";
import Login from "./routes/Login";
import Root from "./routes/Root";
import Signup from "./routes/Signup";
import NotesPage from "./routes/NotesPage";
import 'regenerator-runtime/runtime';
import EditProfile from "./routes/EditProfile";

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/generate' element={<Generate />} />
      <Route path='/notes' element={<NotesPage />} /> 
      <Route path="/editp" element={<EditProfile />} />

      
    </Routes>
    </>
  );
}
