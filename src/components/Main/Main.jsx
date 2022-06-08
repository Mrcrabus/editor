import React from 'react';
import styles from './Main.module.scss'
import TextInput from "../TextInput/TextInput";
import Tags from "../Tags/Tags";
import Notes from "../Notes/Notes";

const Main = () => {
  return (
    <div className={ styles.main }>
      <div className={ styles.main__content }>
        <div className={ styles.main__wrapper }>
          <TextInput />
          <Tags />
          <Notes />
        </div>
      </div>
    
    </div>
  );
};

export default Main;