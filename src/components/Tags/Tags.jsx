import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styles from "./Tags.module.scss"
import {addTag, removeTag} from "../../store/tagsSlice";
import InputTag from "../InputTag/InputTag";
import useOnClickOutside from "../../Hooks/useClickOutside";

const Tags = () => {
  const tags = useSelector(state => state.tags.tags)
  const dispatch = useDispatch();

  const [tagValue, setTagValue] = useState('')
  const [isEdit, setIsEdit] = useState(false);

  const ref = useRef();

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleRemoveTag = (id) => {
    dispatch(removeTag(id))
  }

  const handleAddTag = (e) => {
    if (e.key === "Enter") {
      console.log(tagValue)
      dispatch(addTag(tagValue))
      setIsEdit(false)
    }
  }

  useOnClickOutside(ref, () => setIsEdit(false));

  return (
    <div className={styles.tags}>
      <div className={styles.tags__wrapper}>
        {tags.map(tag =>
          <div className={styles.tags__tag} key={tag.id}><p className={styles.tags__item}>
            {tag.tag}
          </p>
            <button
              className={styles.tags__remove}
              type="button"
              onClick={() => handleRemoveTag(tag.id)}
            >X
            </button>
          </div>
        )}
      </div>
      {isEdit ?
        <div
          className={styles.tags__input}
          ref={ref}
        >
          <InputTag
            text={tagValue}
            setText={setTagValue}
            onKeyDown={handleAddTag}
          />
        </div>

        :
        <button
          className={styles.tags__add}
          type="button"
          onClick={handleEdit}
        >+
        </button>
      }


    </div>
  );
};

export default Tags;