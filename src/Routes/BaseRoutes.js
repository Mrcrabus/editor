import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import NoteDetails from "../components/NoteDetails/NoteDetails";
import Home from "../components/Home/Home";

const BaseRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <MainLayout /> }>
        <Route index element={ <Home /> } />
        <Route path=':noteId' element={ <NoteDetails /> } />
      </Route>
    
    
    </Routes>
  );
};

export default BaseRoutes;