import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = Number(searchParams.get("status") || 500);

  return NextResponse.json({ message: `Error with status ${status}` }, { status });
}
