import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('')
  
  return (
    <input
      type="text"
      value={ text }
      onChange={ e => setText(e.target.value) }
    />
  );
};

export default TextInput;