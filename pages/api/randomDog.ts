import type { NextApiRequest, NextApiResponse } from "next";

type Dog = {
  filesizeBytes: number;
  url: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Dog>
) {
  const response = await fetch("https://random.dog/woof.json");
  const data = await response.json();
  const newDog: Dog = {
    filesizeBytes: data.filesizeBytes,
    url: data.url,
  };

  res.status(200).json(newDog);
}
