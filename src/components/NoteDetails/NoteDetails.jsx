import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from './NoteDetails.module.scss'
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { changeNote } from "../../store/tagsSlice";

const NoteDetails = () => {
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState('')
  
  const isEdit = edit === true;
  
  const dispatch = useDispatch();
  
  const notes = useSelector(state => state.tags.notes)
  const params = useParams()
  const note = notes.find(el => el.id == params.noteId)
  
  const handleEdit = () => {
    setEdit(true);
  }
  
  const handleChangeNote = () => {
    if(text.length) {
      dispatch(changeNote({id: +params.noteId, text}))
    }
    
    setEdit(false)
  }
  
  return (
    <>
      <div className={ styles.noteDetails__home }>
        <Link to="/">{ "<---" }Back home</Link>
      </div>
      <div className={ styles.noteDetails }>
        { isEdit ?
          <TextInput text={ text } setText={ setText } placeholder={ note.text } />
          :
          note.text
        }
        
        <div className={ styles.noteDetails__button }>
          { isEdit ?
            <Button
              onClick={ handleChangeNote }
            >Change</Button>
            :
            <Button
              onClick={ handleEdit }
            >Edit</Button>
          }
        </div>
      </div>
    </>
  )
    ;
};

export default NoteDetails;