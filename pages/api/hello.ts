import user from "@/classes/user";
import type { NextApiRequest, NextApiResponse } from "next";

const myUser = new user("Benny", "12345");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<user>
) {
  switch (res.statusCode) {
    case 200:
      res.status(200).json(myUser);
      break;
    case 300:
      res.status(300).json(myUser);
      break;

      default:
        res.status(500).json(new user("", ""));
  }
}
