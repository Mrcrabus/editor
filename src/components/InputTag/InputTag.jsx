import React from 'react';
import styles from './InputTag.module.scss';

const InputTag = ({text, setText, onKeyDown}) => {
  return (
    <input
      className={styles.inputTag}
      autoFocus={true}
      type="text"
      value={text || ""}
      onKeyDown={onKeyDown}
      onChange={event => setText(event.target.value)}
    />

  );
};

export default InputTag;