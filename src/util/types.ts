import React from "react";

export type ProductImageType = {
  image: string;
  thumbnail: string;
};

export type ShopItemType = {
  id: string;
  name: string;
  description: string;
  productImages: ProductImageType[];
  price: number;
  discount: number;
};

export type CartItem = {
  id: string;
  quantity: number;
};

export interface ProviderProps {
  children?: React.ReactNode;
}
