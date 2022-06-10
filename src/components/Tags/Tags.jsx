import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from "./Tags.module.scss"
import { removeTag } from "../../store/tagsSlice";

const Tags = () => {
  const tags = useSelector(state => state.tags.tags)
  const dispatch = useDispatch();
  
  const [isEdit, setIsEdit] = useState(false);
  
  const handleEdit = () => {
    setIsEdit(true)
  }
  
  const handleRemoveTag = (id) => {
    dispatch(removeTag(id))
  }
  
  const handleAddTag = () => {
  
  }
  
  return (
    <div className={ styles.tags }>
      <div className={ styles.tags__wrapper }>
        { tags.map(tag =>
          <div className={ styles.tags__tag } key={ tag.id }><p className={ styles.tags__item }>
            { tag.tag }
          </p>
            <button
              className={ styles.tags__remove }
              type="button"
              onClick={ () => handleRemoveTag(tag.id) }
            >X
            </button>
          </div>
        ) }
      </div>
      <button
        className={ styles.tags__add }
        type="button"
        onClick={ handleEdit }
      >+
      </button>
    
    </div>
  );
};

export default Tags;