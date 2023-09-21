"use client";
import React from "react";
import Link from "next/link";
import { URL } from "@/data/constant";

type NavLinksProps = {
  className: string;
  onClick?: () => void;
};

const NavLinks = ({ className, onClick }: NavLinksProps) => (
  <nav className={className}>
    <Link
      href={URL.RESERVATION}
      className="whitespace-nowrap"
      onClick={onClick ? onClick : () => {}}
    >
      점검예약
    </Link>
    <Link
      href={URL.REPORT_PREVIEW}
      className="whitespace-nowrap"
      onClick={onClick ? onClick : () => {}}
    >
      점검리포트 미리보기
    </Link>
    <Link
      href={URL.BLOG}
      className="whitespace-nowrap"
      onClick={onClick ? onClick : () => {}}
    >
      블로그
    </Link>
    <Link
      href={URL.REVIEW}
      className="whitespace-nowrap"
      onClick={onClick ? onClick : () => {}}
    >
      이용후기
    </Link>
  </nav>
);

export default NavLinks;
