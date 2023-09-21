"use client";
import { IMAGE } from "@/data/constant";
import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <>
      {/* Drawer Backdrop */}
      {isOpen && (
        <div
          className="z-20 fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        />
      )}
      <div
        className={`z-20 fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden p-5`}
      >
        <div className="flex justify-between items-center">
          <Logo
            className="relative inline-block"
            src={IMAGE.DRAWER_LOGO}
            width={108}
            height={57}
          />
        </div>
        <NavLinks
          className="flex flex-col text-xl text-black space-y-4 mt-5"
          onClick={onClose}
        />
      </div>
    </>
  );
};

export default Drawer;
