"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";
import { useSession } from "next-auth/react";
// import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.replace("/home");
    return null;
  }
  router.replace("/i/flow/login");
  return <Main />;
}
//인터셉트라우트는 클라이언트에서 페이지를 넘어갔을때 관여한다
