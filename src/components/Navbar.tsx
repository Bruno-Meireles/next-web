import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed z-50 top-0 w-full flex items-center py-4 px-8 justify-between  bg-slate-800 text-white">
        <Link
          href="/"
          className="uppercase font-bold text-md h-12 flex items-center"
        >
          <div> Next Store</div>
        </Link>
        <ul className="flex justify-center items-center w-11/12 gap-4  ">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/products">
            <li>Produtos</li>
          </Link>
          <Link href="/contact">
            <li>Contato</li>
          </Link>
        </ul>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <button  className="bg-teal-600 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded text-sm p-5 text-center">Entrar</button>
          </SignInButton>
        </SignedOut>
      </nav>
    </div>
  );
};

export default Navbar;
