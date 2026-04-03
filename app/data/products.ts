export type Product = {
  id: string;
  name: string;
  price: number;
  slug: string;
  variant: "light" | "dark";
  imageCount: number;
};

export const products: Product[] = [
  {
    id: "transparent-speaker-light",
    name: "Transparent Speaker",
    price: 1900,
    slug: "transparent-speaker-light",
    variant: "light",
    imageCount: 3,
  },
  {
    id: "transparent-speaker-dark",
    name: "Transparent Speaker",
    price: 1900,
    slug: "transparent-speaker-dark",
    variant: "dark",
    imageCount: 3,
  },
  {
    id: "small-transparent-speaker-light",
    name: "Small Transparent Speaker",
    price: 900,
    slug: "small-transparent-speaker-light",
    variant: "light",
    imageCount: 3,
  },
  {
    id: "small-transparent-speaker-dark",
    name: "Small Transparent Speaker",
    price: 900,
    slug: "small-transparent-speaker-dark",
    variant: "dark",
    imageCount: 3,
  },
  {
    id: "acoustic-sculpture-dark",
    name: "Acoustic Sculpture",
    price: 1900,
    slug: "acoustic-sculpture-dark",
    variant: "dark",
    imageCount: 3,
  },
  {
    id: "acoustic-sculpture-light",
    name: "Acoustic Sculpture",
    price: 1900,
    slug: "acoustic-sculpture-light",
    variant: "light",
    imageCount: 3,
  },
];

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}
