import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const zone = searchParams.get("zone");
  const response = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=${zone}`,
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const data = await response.json();
  return NextResponse.json(data);
}
