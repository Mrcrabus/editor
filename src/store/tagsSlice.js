import { createSlice } from '@reduxjs/toolkit'

const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    tags: [{
      id: 0,
      tag: 'shop',
    }, {
      id: 1,
      tag: 'school',
    }, {
      id: 2,
      tag: 'lolkek2',
    }],
    notes: [
      {
        id: 0,
        text: 'I wanna go to #shop',
      }, {
        id: 1,
        text: 'I wanna go to #school',
      }
    ]
  }
  ,
  reducers: {
    removeTag: (state, action) => {
      state = {...state, tags: state.tags.filter(tag => tag.id != action.payload)}
      return state
    },
    addTag: (state, action) => {
      state.tags.push({
        id: Math.random() * 1000,
        tag: action.payload
      })
    },
    
    addNotes: (state, action) => {
      state.notes.push({
        id: Math.random() * 1000,
        text: action.payload
      })
    },
    changeNote: (state, action) => {
      let {id, text} = action.payload;
      state = {
        ...state, notes: state.notes.map((el) => {
          if(el.id == id) {
            return {...el, text}
          }
          return el;
        })
      };
      return state
    },
  },
})

export const {addNotes, changeNote, removeTag, addTag} = tagsSlice.actions

export default tagsSlice.reducer