import { configureStore } from '@reduxjs/toolkit'
import tagsSlice from "./tagsSlice";
import notesSlice from "./notesSlice";

export const store = configureStore({
  reducer: {
    tags: tagsSlice,
    notes: notesSlice
  },
})