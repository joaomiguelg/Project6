
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Delivery } from './types';

const initialState: Delivery = {
  receiver: '',
  address: {
    description: '',
    city: '',
    zipCode: '',
    number: 0,
    complement: '',
  },
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setDeliveryData(state, action: PayloadAction<Delivery>) {
      return { ...state, ...action.payload };
    },
    clearDeliveryValues: (state) => {
        state.receiver = '',
        state.address.city = '',
        state.address.complement = '',
        state.address.description = '',
        state.address.number = 0
        state.address.zipCode = ''
    }
  },
});

export const { setDeliveryData, clearDeliveryValues} = deliverySlice.actions;
export default deliverySlice.reducer;
