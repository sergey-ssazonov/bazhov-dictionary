import { getWordsByFirstLetter } from "@/src/shared/data/getWords";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const letter = url.searchParams.get("first_letter") || "";

  const words = getWordsByFirstLetter(letter);

  return NextResponse.json(words);
}
