import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export const setMessage = (message) => {
  return { type: 'SET_MESSAGE', payload: message };
};

export default store;
