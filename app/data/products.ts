export type Product = {
  id: string;
  name: string;
  price: number;
  colorDot: string;
  slug: string;
};

export const products: Product[] = [
  {
    id: "transparent-speaker-black",
    name: "Transparent Speaker",
    price: 1900,
    colorDot: "#000000",
    slug: "transparent-speaker-black",
  },
  {
    id: "transparent-speaker-red",
    name: "Transparent Speaker",
    price: 1900,
    colorDot: "#d92b2b",
    slug: "transparent-speaker-red",
  },
  {
    id: "small-transparent-speaker-white",
    name: "Small Transparent Speaker",
    price: 900,
    colorDot: "#000000",
    slug: "small-transparent-speaker-white",
  },
  {
    id: "small-transparent-speaker-dark",
    name: "Small Transparent Speaker",
    price: 900,
    colorDot: "#000000",
    slug: "small-transparent-speaker-dark",
  },
  {
    id: "acoustic-sculpture-black",
    name: "Acoustic Sculpture",
    price: 1900,
    colorDot: "#000000",
    slug: "acoustic-sculpture-black",
  },
  {
    id: "acoustic-sculpture-white",
    name: "Acoustic Sculpture",
    price: 1900,
    colorDot: "#000000",
    slug: "acoustic-sculpture-white",
  },
];

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}
