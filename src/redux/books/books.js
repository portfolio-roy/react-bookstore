import { createReducer } from '@reduxjs/toolkit';

// Types
const ADD = 'bookstore-roy/books/ADD';
const REMOVE = 'bookstore-roy/books/REMOVE';

// Default sate
const defaultState = [];

// Actions
const addBook = (book) => ({
  type: ADD,
  book,
});

const removeBook = (book) => ({
  type: REMOVE,
  book,
});

// Book Reducer

const bookReducer = createReducer(defaultState, {
  [ADD]: (state, { book }) => [...state, book],
  [REMOVE]: (state, { book }) => state.filter((b) => b.id !== book.id),
});

export { addBook, removeBook };
export default bookReducer;
