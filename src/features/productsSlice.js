import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/products';

const productsSlice = createSlice({
  name: 'products',
  initialState: productsData,
  reducers: {},
});

export const selectAllProducts = (state) => state.products;

export default productsSlice.reducer;
