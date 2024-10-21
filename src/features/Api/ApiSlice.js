import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get('https://6712c15c6c5f5ced6624928d.mockapi.io/products');
  return response.data;
});

const apiSlice = createSlice({
  name: 'data',
  initialState: {
    value: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default apiSlice.reducer;
