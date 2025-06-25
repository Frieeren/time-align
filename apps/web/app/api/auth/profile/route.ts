import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader) {
      return NextResponse.json(
        { error: "Authorization header가 필요합니다." },
        { status: 401 }
      );
    }

    const response = await fetch("http://localhost:3001/auth/profile", {
      method: "GET",
      headers: {
        "Authorization": authHeader,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Profile 프록시 에러:", error);
    return NextResponse.json(
      { error: "Profile 조회 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
} 