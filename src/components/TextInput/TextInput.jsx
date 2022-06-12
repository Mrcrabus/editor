import React from 'react';
import styles from './TextInput.module.scss'

const TextInput = ({text, setText, placeholder}) => {
  
  return (
    <input
      className={ styles.textInput__input }
      placeholder={ placeholder || "Enter your note" }
      type="text"
      value={ text || "" }
      onChange={ e => setText(e.target.value) }
    />
  );
};

export default TextInput;