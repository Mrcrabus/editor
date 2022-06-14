import { createSlice } from '@reduxjs/toolkit'

const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    tags: [],
    notes: [],
    filteredNotes: [],
  }
  ,
  reducers: {
    removeTag: (state, action) => {
      state = {...state, tags: state.tags.filter(tag => tag.id !== action.payload)}
      return state
    },
    removeNote: (state, action) => {
      state = {
        ...state, notes: state.notes.filter(note => note.id !== action.payload),
        filteredNotes: state.notes.filter(note => note.id !== action.payload),
      }
      return state
    },
    addTag: (state, action) => {
      state.tags.push({
        id: Math.random() * 1000,
        tag: action.payload
      })
    },
    getAllNotes: (state) => {
      return {...state, filteredNotes: state.notes}
    },
    
    filterNotes: (state, action) => {
      state = {...state, filteredNotes: state.notes.filter((note) => note.text.includes(action.payload))}
      return state
    },
    addNotes: (state, action) => {
      let newState = {
        ...state,
        notes: [
          ...state.notes,
          {
            id: Math.random() * 1000,
            text: action.payload
          }
        ]
      }
      return {
        ...newState, filteredNotes: newState.notes
      }
    },
    changeNote: (state, action) => {
      let {id, text} = action.payload;
      let newState = {
        ...state, notes: state.notes.map((el) => {
          if(el.id === id) {
            return {...el, text}
          }
          return el;
        })
      };
      return {...newState, filteredNotes: newState.notes}
    },
  },
})

export const {addNotes, changeNote, removeTag, addTag, filterNotes, getAllNotes, removeNote} = tagsSlice.actions

export default tagsSlice.reducer