export type Product = {
  id: string;
  name: string;
  price: number;
  colorDot: string;
  colorDotFilled: boolean;
  slug: string;
};

export const products: Product[] = [
  {
    id: "transparent-speaker-black",
    name: "Transparent Speaker",
    price: 1100,
    colorDot: "#000000",
    colorDotFilled: true,
    slug: "transparent-speaker-black",
  },
  {
    id: "transparent-speaker-red",
    name: "Transparent Speaker",
    price: 1100,
    colorDot: "#d92b2b",
    colorDotFilled: true,
    slug: "transparent-speaker-red",
  },
  {
    id: "small-transparent-speaker-white",
    name: "Small Transparent Speaker",
    price: 900,
    colorDot: "#000000",
    colorDotFilled: true,
    slug: "small-transparent-speaker-white",
  },
  {
    id: "small-transparent-speaker-dark",
    name: "Small Transparent Speaker",
    price: 900,
    colorDot: "#000000",
    colorDotFilled: true,
    slug: "small-transparent-speaker-dark",
  },
  {
    id: "acoustic-sculpture-black",
    name: "Acoustic Sculpture",
    price: 3000,
    colorDot: "#000000",
    colorDotFilled: true,
    slug: "acoustic-sculpture-black",
  },
  {
    id: "acoustic-sculpture-white",
    name: "Acoustic Sculpture",
    price: 3000,
    colorDot: "#000000",
    colorDotFilled: false,
    slug: "acoustic-sculpture-white",
  },
];

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}
