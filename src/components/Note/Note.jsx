import React, { useState } from 'react';
import styles from './Note.module.scss'
import { Link } from "react-router-dom";

const Note = ({note, index, onRemove}) => {
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <p
      className={ styles.note }
      
      onMouseMove={ () => setIsVisible(true) }
      onMouseLeave={ () => setIsVisible(false) }
    >
      <Link to={ `/${ note.id }` }>{ index + 1 }. { note.text }</Link>
      { isVisible && <button onClick={ () => onRemove(note.id) } className={ styles.note__remove }>X</button> }
    </p>
  );
};

export default Note;