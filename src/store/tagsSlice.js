import { createSlice } from '@reduxjs/toolkit'

const tagsSlice = createSlice({
  name: 'tags',
  initialState: [
    {
      id: 0,
      tag: 'lolkek',
    }, {
      id: 1,
      tag: 'lolkek2',
    }
  ],
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = tagsSlice.actions

export default tagsSlice.reducer