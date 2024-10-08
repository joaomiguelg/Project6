import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardapioIten } from "../../pages/Home";

type CartState = {
    items: CardapioIten[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CardapioIten>) => {
            const item = state.items.find((item) => item.id === action.payload.id)

            if(!item) {
                state.items.push(action.payload)
            } else {
                alert("O produto ja está no carrinho")
            }
            
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
          },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        clear: (state) => {
            state.items = []
        }
    }
})

export const { add, open, close, remove, clear } = cartSlice.actions

export default cartSlice.reducer