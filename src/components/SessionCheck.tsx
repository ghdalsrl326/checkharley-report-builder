"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";

//TODO
//고객 전화번호, 차대번호, 날짜를 조합해 reportId 만들 예정. 다음은 사용 예시.
//1. 사용자에게 url 제공: http://report-domain-origin/report/reportId
//2. 최초 접속, 해당 리포트에 권한이 없으면 여기로 이동: http://report-domain-origin
//3. 로그인 후 1의 url 로 리다이렉션
const SessionCheck = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (session) {
      return router.push("/report");
    } else {
      handleClickSignIn();
    }
  }, [router, session, status]);

  const handleClickSignIn = async () => {
    signIn("google", { callbackUrl: "/report" });
  };

  return (
    <div className="hidden">
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={handleClickSignIn}
      >
        Sign In
      </button>
    </div>
  );
};

export default SessionCheck;
