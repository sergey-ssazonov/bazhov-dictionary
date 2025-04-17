import db from "./db";
import { ITale } from "../types/Tale";

export const getTales = () => {
  const tales = db.prepare("SELECT * FROM Tales").all() as ITale[];
  return tales;
};
