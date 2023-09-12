import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold">{"Check Harley"}</h1>
      </Link>
      <nav className="flex text-white gap-4">
        <Link href={"/reservation"}>점검예약</Link>
        <Link href={"/report-preview"}>점검리포트 미리보기</Link>
        <Link href={"/blog"}>블로그</Link>
        <Link href={"/reviews"}>이용후기</Link>
      </nav>
    </header>
  );
};

export default Header;
