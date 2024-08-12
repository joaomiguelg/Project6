import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardapioIten } from "../../pages/Home";

type CartState = {
    items: CardapioIten[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CardapioIten>) => {
            state.items.push(action.payload)
        }
    }
})

export const { add } = cartSlice.actions

export default cartSlice.reducer