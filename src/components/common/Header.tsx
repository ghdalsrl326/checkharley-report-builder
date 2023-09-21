"use client";
import React, { useState } from "react";
import { IMAGE } from "@/data/constant";
import { FiMenu } from "react-icons/fi";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="relative bg-black">
      <div className="flex justify-between items-center gap-x-4 md:gap-x-28 px-4 md:px-28 py-2 md:py-5 overflow-x-auto">
        <Logo
          className="w-[204px] h-[41px] relative inline-block"
          src={IMAGE.MAIN_LOGO}
          width={204}
          height={41}
        />
        <NavLinks className="hidden md:inline-flex text-xl text-white gap-20" />
        <button className="md:hidden p-2 text-white" onClick={handleDrawer}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* Drawer Backdrop */}
      {isDrawerOpen && (
        <div
          className="z-20 fixed inset-0 bg-black opacity-50"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
      <div
        className={`z-20 fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
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
          onClick={handleDrawer}
        />
      </div>
    </header>
  );
};

export default Header;
