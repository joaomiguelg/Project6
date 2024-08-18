import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaymentType } from './types';

const initialState: PaymentType = {
  card: {
    name: '',
    number: '',
    code: 0,
    expires: {
      month: 0,
      year: 0,
    },
  },
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentData(state, action: PayloadAction<PaymentType>) {
      return { ...state, ...action.payload };
    },
    
  },
});

export const { setPaymentData } = paymentSlice.actions;
export default paymentSlice.reducer;
