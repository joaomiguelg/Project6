import {configureStore} from '@reduxjs/toolkit'
import deliveryReducer from './reducers/delivery'
import paymentReducer from './reducers/payment'
import confirmReducer from './reducers/confirm'
import orderIdReducer from './reducers/orderId'

import api from '../services/api'

import cartReducer from './reducers/cart'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [api.reducerPath]: api.reducer,
        delivery: deliveryReducer,
        payment: paymentReducer,
        confirm: confirmReducer,
        orderId: orderIdReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>