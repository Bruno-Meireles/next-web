import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full flex items-center py-4 px-8 justify-between  bg-slate-800 text-white">
        <Link
          href="/"
          className="uppercase font-bold text-md h-12 flex items-center"
        >
          <div> Next Store</div>
        </Link>
        <ul className="flex justify-center items-center w-11/12 gap-4  ">
          <li>Home</li>
          <li>Contato</li>
          <li>About</li>
        </ul>
        <ul>
     
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
