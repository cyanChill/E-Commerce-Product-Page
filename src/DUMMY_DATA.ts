type ProductImageType = {
  image: string;
  thumbnail: string;
};

type ShopItemType = {
  id: string;
  name: string;
  description: string;
  productImages: ProductImageType[];
  price: number;
  discount: number;
};

interface ShopItemsInterface {
  [x: string]: ShopItemType;
}

export const ShopItems: ShopItemsInterface = {
  "b1b2a9c5-5cdd-4857-b6dc-ce0def506b79": {
    id: "b1b2a9c5-5cdd-4857-b6dc-ce0def506b79",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    productImages: [
      {
        image: "/assets/image-product-1.jpg",
        thumbnail: "/assets/image-product-1-thumbnail.jpg",
      },
      {
        image: "/assets/image-product-2.jpg",
        thumbnail: "/assets/image-product-2-thumbnail.jpg",
      },
      {
        image: "/assets/image-product-3.jpg",
        thumbnail: "/assets/image-product-3-thumbnail.jpg",
      },
      {
        image: "/assets/image-product-4.jpg",
        thumbnail: "/assets/image-product-4-thumbnail.jpg",
      },
    ],
    price: 125.0,
    discount: 0.5,
  },
};
