import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGE, URL } from "@/data/constant";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-start p-4 md:p-8 pl-4 md:pl-28 gap-y-4 bg-[#383C40] text-white text-xs md:text-base">
      <Image
        className="w-auto"
        src={IMAGE.MAIN_LOGO}
        alt={"footerLogo"}
        width={204}
        height={41}
      />
      <nav className="flex gap-4">
        <Link href={URL.RESERVATION}>점검예약</Link>
        <Link href={URL.REPORT_PREVIEW}>점검리포트 미리보기</Link>
        <Link href={URL.BLOG}>블로그</Link>
        <Link href={URL.REVIEW}>이용후기</Link>
      </nav>
      <span>
        <p>
          상호 : 체크할리 ㅣ 대표자명 : 홍민기 ㅣ 개인정보관리책임자 : 홍민기
        </p>
        <p>이메일 : check.harley.davison@gmail.com</p>
      </span>
      <span>
        <p>COPYRIGHT © 2023 체크할리 ㅣ CheckHarley All rights reserved</p>
      </span>
    </footer>
  );
};

export default Footer;
