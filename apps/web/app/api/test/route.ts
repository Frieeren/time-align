import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const delay = searchParams.get("delay");

  if (delay) {
    await new Promise(resolve => setTimeout(resolve, Number(delay)));
  }

  return NextResponse.json({
    message: "Success",
    data: {
      id: 1,
      name: "Test Item",
      timestamp: new Date().toISOString(),
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      message: "Created",
      data: {
        ...body,
        id: Math.floor(Math.random() * 1000),
        createdAt: new Date().toISOString(),
      },
    });
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }
}

export async function DELETE() {
  return new NextResponse(null, { status: 204 });
}
