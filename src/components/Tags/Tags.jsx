import React from 'react';
import { useSelector } from "react-redux";

const Tags = () => {
  let tags = useSelector(state => state.tags)
  
  console.log(tags)
  
  return (
    <div>
      { tags.map(tag =>
        <p key={ tag.id }><b>{ tag.id }</b>{ tag.tag }</p>
      ) }
    
    </div>
  );
};

export default Tags;