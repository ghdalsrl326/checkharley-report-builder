//client side component 에서 API로 호출할 경우 사용

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json("test ");
}
