import React from "react";

export type CartItem = {
  id: string;
  quantity: number;
};

export interface ProviderProps {
  children?: React.ReactNode;
}
