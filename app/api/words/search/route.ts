import { getWords } from "@/src/shared/data/getWords";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";

  const words = getWords(query);

  return NextResponse.json(words);
}
