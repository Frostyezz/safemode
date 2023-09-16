import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../schemas/user.schema";

export interface Context {
  req: NextApiRequest;
  res: NextApiResponse;
  userId: User["_id"] | null;
  familyId: User["familyId"] | null;
  role: User["role"] | null;
}
