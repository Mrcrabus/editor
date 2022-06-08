import React from 'react';
import { useSelector } from "react-redux";

const Notes = () => {
  const notes = useSelector(state => state.notes)
  console.log(notes)
  
  return (
    <div>
    
    </div>
  );
};

export default Notes;