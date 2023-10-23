import type { NextApiRequest, NextApiResponse } from "next";

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const productList: Product[] = [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  data.forEach(({ id, title, price, image }: Product) => {
    productList.push({
      id,
      title,
      price,
      image,
    });
  });

  res.status(200).json(productList)
}
