import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Router, { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const isBlogPage = router.pathname.includes("/blog/");

  return (
    <header className="bg-slate-50 sm:h-auto">
      <Navbar />
      {!isBlogPage && <Hero />}
    </header>
  );
};

export default Header;
