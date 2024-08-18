import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurante } from "../pages/Home";
import { CheckoutData} from "../store/reducers/types";

type PurchaseResponse = {
  orderId: string;
};



const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query<Restaurante[], void>({
      query: () => "restaurantes",
    }),
    getCardapioItens: builder.query({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<PurchaseResponse, CheckoutData>({
        query: (body) => ({
            url: 'checkout',
            method: 'POST',
            body
        })
    }),
  }),
});

export const { useGetRestaurantQuery, useGetCardapioItensQuery, usePurchaseMutation } = api;
export default api;
