import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import netflixLogo from "@/public/netflixlogo.png";
import { Stack } from "../atomic";
import { Navigation } from "../Navigation";

const Header = () => {
  return (
    <header className="fixed z-10 w-screen">
      <div className="flex justify-between p-6 lg:py-6 lg:px-20 m-auto bg-[linear-gradient(180deg,rgba(0,0,0,.7)_10%,transparent)]">
        <Stack className="gap-8">
          <Image
            className="object-contain"
            src={netflixLogo}
            alt="Netflix logo"
            width={120}
          />
          <Navigation />
        </Stack>

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
