import { configureStore } from '@reduxjs/toolkit'
import tagsSlice from "./tagsSlice";

const localStorageMiddleware = ({getState}) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('notes', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if(localStorage.getItem('notes') !== null) {
    return JSON.parse(localStorage.getItem('notes'));
  }
};

export const store = configureStore({
  reducer: {
    tags: tagsSlice,
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
