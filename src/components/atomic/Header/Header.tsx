import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import netflixLogo from "@/public/netflixlogo.png";

const Header = () => {
  return (
    <header className="fixed z-10 w-screen">
      <div className="max-w-[1560px] flex justify-between p-6 m-auto">
        <Image
          className="object-contain"
          src={netflixLogo}
          alt="Netflix logo"
          width={120}
        />
        <SignedOut>
          <div className="bg-primary py-3 px-5 rounded-[6px] font-semibold">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
