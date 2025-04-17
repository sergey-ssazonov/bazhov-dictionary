// import { getWordsByTale } from '@/src/shared/data/getWords';
import { getWordsByTale } from "@/src/shared/data/getWords";
import { NextResponse } from "next/server";

interface Params {
  id: number;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const { id } = params;

  const words = getWordsByTale(Number(id));

  return NextResponse.json(words);
}
