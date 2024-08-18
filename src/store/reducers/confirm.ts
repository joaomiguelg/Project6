import { createSlice } from "@reduxjs/toolkit";

type ConfirmState = {
    isOpen: boolean
}

const initialState: ConfirmState = {
    isOpen: false
}

const confirmSlice = createSlice({
    name: 'confirm',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }


})

export const { open, close } = confirmSlice.actions

export default confirmSlice.reducer