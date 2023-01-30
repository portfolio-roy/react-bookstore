import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// Types
const ADD = 'bookstore-roy/books/ADD';
const REMOVE = 'bookstore-roy/books/REMOVE';

// Default sate
const defaultState = [
  {
    id: uuidv4(),
    title: 'Pale Blue Dot: A Vision of the Human Future in Space',
    author: 'Carl Sagan',
  },
  {
    id: uuidv4(),
    title: 'A People\'s History of the United States',
    author: 'Howard Zinn',
  },
];

// Actions
const addBook = (book) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    title: book.title,
    author: book.author,
  },
});

const removeBook = (index) => ({
  type: REMOVE,
  payload: index,
});

// Book Reducer

const bookReducer = createReducer(defaultState, {
  [ADD]: (state, action) => [...state, action.payload],
  [REMOVE]: (state, action) => [...state.filter((book) => book.id !== action.payload)],
});

export { addBook, removeBook };
export default bookReducer;
