import { log } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

type Product = { id: number; title: string; price: number };

const productList: Product[] = []

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
    
      res.status(200).json(data)
  }
