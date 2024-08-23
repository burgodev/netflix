"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import "../src/globals.css";

const Header = () => {
  return (
    <header className="flex justify-end p-6 m-auto max-w-[1560px] ">
      <SignedOut>
        <div className="bg-primary py-3 px-5 rounded-[6px] font-semibold">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
