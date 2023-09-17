import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES, URLS } from "@/data/constant";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-x-28 px-28 py-5 bg-black overflow-x-auto">
      <Link href={URLS.HOME}>
        <div className="w-[204px] h-[41px] relative inline-block">
          <Image
            src={IMAGES.MAIN_LOGO}
            alt={"headerLogo"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <nav className="inline-flex text-xl text-white gap-20">
        <Link href={URLS.RESERVATION} className="whitespace-nowrap">
          점검예약
        </Link>
        <Link href={URLS.REPORT_PREVIEW} className="whitespace-nowrap">
          점검리포트 미리보기
        </Link>
        <Link href={URLS.BLOG} className="whitespace-nowrap">
          블로그
        </Link>
        <Link href={URLS.REVIEWS} className="whitespace-nowrap">
          이용후기
        </Link>
      </nav>
    </header>
  );
};

export default Header;
