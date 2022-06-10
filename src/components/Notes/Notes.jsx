import React from 'react';
import { useSelector } from "react-redux";
import styles from './Notes.module.scss'
import { Link } from "react-router-dom";

const Notes = () => {
  const notes = useSelector(state => state.tags.notes)
  
  return (
    <div className={ styles.notes }>
      { notes.map(note =>
        <p className={ styles.notes__item } key={ note.id }><Link to={ `/${ note.id }` }>{ note.text }</Link></p>
      ) }
    </div>
  );
};

export default Notes;