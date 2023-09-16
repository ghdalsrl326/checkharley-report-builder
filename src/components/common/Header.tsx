import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-x-28 px-28 py-5 bg-black overflow-x-auto">
      <Link href={"/"}>
        <div className="w-[204px] h-[41px] relative inline-block">
          <Image
            src={`/images/mainLogo.png`}
            alt={"headerLogo"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <nav className="inline-flex text-xl text-white gap-20">
        <Link href={"/reservation"} className="whitespace-nowrap">
          점검예약
        </Link>
        <Link href={"/report-preview"} className="whitespace-nowrap">
          점검리포트 미리보기
        </Link>
        <Link href={"/blog"} className="whitespace-nowrap">
          블로그
        </Link>
        <Link href={"/reviews"} className="whitespace-nowrap">
          이용후기
        </Link>
      </nav>
    </header>
  );
};

export default Header;
