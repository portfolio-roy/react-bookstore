import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const GET_BOOKS = 'GET_BOOKS';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ScuVQP7NPLm2aX4CZF23/books';

const getAllBooks = createAsyncThunk(
  GET_BOOKS,
  async (post, { dispatch }) => {
    const response = await axios.get(url);
    const books = response.data;
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  },
);

const addBook = createAsyncThunk(
  ADD,
  async (book, { dispatch }) => {
    await axios.post(url, book);
    dispatch({
      type: ADD,
      payload: book,
    });
  },
);

const removeBook = createAsyncThunk(
  REMOVE,
  async (id, { dispatch }) => {
    await axios.delete(`${url}/${id}`);
    dispatch({
      type: REMOVE,
      payload: id,
    });
  },
);

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((book) => book.item_id !== action.payload)];
    default:
      return state;
  }
};

export { getAllBooks, addBook, removeBook };
export default bookReducer;
