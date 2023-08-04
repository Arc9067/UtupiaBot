import React from "react";

const Header = () => {
  return (
    <header className="py-4 w-full absolute top-0  z-50">
      <nav className="container flex justify-between items-center">
        <h1 className="text-white text-2xl font-extrabold leading-[33.60px] tracking-wide">
          UTOPIA BOT
        </h1>
        <div className="justify-between items-start gap-8 lg:flex hidden">
          <div className="text-white cursor-pointer text-base font-normal leading-snug tracking-tight">
            Features
          </div>
          <div className="text-white cursor-pointer text-base font-normal leading-snug tracking-tight">
            About Us
          </div>
          <div className="text-white cursor-pointer text-base font-normal leading-snug tracking-tight">
            Changelog
          </div>
          <div className="text-white cursor-pointer text-base font-normal leading-snug tracking-tight">
            Documnetation
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
