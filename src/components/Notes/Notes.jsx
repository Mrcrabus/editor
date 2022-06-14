import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Note from "../Note/Note";
import { removeNote } from "../../store/tagsSlice";

const Notes = () => {
  const notes = useSelector(state => state.tags.filteredNotes)
  
  const dispatch = useDispatch()
  
  const handleRemove = (id) => {
    dispatch(removeNote(id))
  }
  
  return (
    <div>
      { notes.map((note, index) =>
        <Note note={ note } index={ index } key={ note.id } onRemove={handleRemove}/>
      ) }
    </div>
  );
};

export default Notes;