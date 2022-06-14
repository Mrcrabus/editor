import React, { useCallback, useState } from 'react';
import Tags from "../Tags/Tags";
import styles from "./Home.module.scss";
import TextInput from "../TextInput/TextInput";
import Notes from "../Notes/Notes";
import Button from "../Button/Button";
import { addNotes, addTag } from "../../store/tagsSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  
  const tags = useSelector(state => state.tags.tags)
  
  const [text, setText] = useState();
  
  const dispatch = useDispatch();
  
  const handleAddNotes = useCallback(() => {
    if(text?.trim().length) {
      dispatch(addNotes(text))
      if(text?.includes("#")) {
        console.log(text?.match(/(#\w+)/g))
        let words = text?.match(/(#\w+)/g);
        words.map(word => {
          if(!tags.find(tag => tag.tag === word)) {
            dispatch(addTag(word))
          }
          return word
        })
      }
    }
    setText("")
  }, [dispatch, tags, text])
  
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