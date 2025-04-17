import { getTales } from "@/src/shared/data/getTales";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(getTales());
}
