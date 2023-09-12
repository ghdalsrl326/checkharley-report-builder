import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-start p-8 gap-y-4 bg-[#383C40] text-white">
      <Image
        className="w-auto"
        src={`/images/mainLogo.svg`}
        alt={"footerLogo"}
        width={204}
        height={41}
      />
      <nav className="flex gap-4">
        <Link href={"/reservation"}>점검예약</Link>
        <Link href={"/report-preview"}>점검리포트 미리보기</Link>
        <Link href={"/blog"}>블로그</Link>
        <Link href={"/reviews"}>이용후기</Link>
      </nav>
      <span>
        <p>
          상호 : 체크할리 ㅣ 대표자명 : 홍민기 ㅣ 개인정보관리책임자 : 홍민기
        </p>
        <p>전화번호 : 0000-0000 ㅣ 이메일 : check.harley.dacison@gmail.com</p>
      </span>
      <span>
        <p>COPYRIGHT © 2023 체크할리 ㅣ CheckHarley All rights reserved</p>
      </span>
    </footer>
  );
};

export default Footer;
