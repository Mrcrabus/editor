import React, { useState } from 'react';
import Tags from "../Tags/Tags";
import styles from "./Home.module.scss";
import TextInput from "../TextInput/TextInput";
import Notes from "../Notes/Notes";
import Button from "../Button/Button";
import { addNotes } from "../../store/tagsSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  
  const [text, setText] = useState();
  
  const dispatch = useDispatch();
  
  const handleAddNotes = () => {
    if(text?.length) {
      dispatch(addNotes(text))
    }
    setText("")
  }
  
  return (
    <>
      <Tags />
      <div className={ styles.home__notes }>
        <TextInput text={ text } setText={ setText } />
        <Button onClick={ handleAddNotes }>Add</Button>
        <Notes />
      </div>
    </>
  );
};

export default Home;