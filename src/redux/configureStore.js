import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

// Root Reducer

const rootReducer = combineReducers({
  books: bookReducer,
  category: categoryReducer,
});

// Store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
