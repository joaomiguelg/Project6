
export interface Product {
    id: number;
    price: number;
  }
  
  export interface Address {
    description: string;
    city: string;
    zipCode: string;
    number: number;
    complement: string;
  }
  
  export interface Delivery {
    receiver: string;
    address: Address;
  }
  
  export interface Card {
    name: string;
    number: string;
    code: number;
    expires: {
      month: number;
      year: number;
    };
  }
  
  export interface PaymentType {
    card: Card;
  }
  
  export interface CheckoutData {
    products: Product[];
    delivery: Delivery;
    payment: PaymentType;
  }
  