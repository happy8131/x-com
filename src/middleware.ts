import { auth } from "./auth";
import { NextResponse } from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
//페이지보단 middleware가 먼저 실행이된다. , auth함수는 내가 로그인했는지 안했는지 알 수 있다.
//config는 로그인을 해야지만 접글할 수 있다.
