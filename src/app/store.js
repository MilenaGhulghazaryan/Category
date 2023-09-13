import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import gendersReducer from '../features/category/GenderSlice';
import categoriesReducer from '../features/category/CategoriesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    genders: gendersReducer,
    category: categoriesReducer
  },
});
