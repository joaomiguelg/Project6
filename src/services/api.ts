import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  Restaurante } from "../pages/Home";



const api = createApi({

    
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurant: builder.query<Restaurante[], void>({
            query: () => 'restaurantes'
        }),
        getCardapioItens: builder.query({
            query: (id) => `restaurantes/${id}`,
          }),
    })
})

export const { useGetRestaurantQuery, useGetCardapioItensQuery } = api
export default api