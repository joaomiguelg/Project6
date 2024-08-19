import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderId: '',
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    setOrderId(state, action) {
      state.orderId = action.payload;
    },
    clearOrderId(state) {
      state.orderId = '';
    },
  },
});

export const { setOrderId, clearOrderId } = purchaseSlice.actions;

export default purchaseSlice.reducer;