import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import netflixBanner from "@/public/netflixbanner.jpg";
import { Typography } from "../atomic/Typography";

const Banner = () => {
  return (
    <div className="relative h-[80vh]">
      <div className="absolute inset-0">
        <Image
          src={netflixBanner}
          layout="fill"
          objectFit="cover"
          alt="Netflix Banner"
          objectPosition="top"
          className="object-contain "
        />
      </div>
      <div className="relative ml-8 pt-36 h-48">
        <h1 className="text-3xl font-extrabold pb-1">Narcos</h1>
        <div className="flex space-x-4">
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm px-8 mr-4 py-2 bg-gray-700 bg-opacity-50 hover:text-black hover:bg-gray-300 transition-all duration-200">
            Play
          </button>
          <button className="cursor-pointer text-white outline-none border-none font-bold rounded-sm px-8 mr-4 py-2 bg-gray-700 bg-opacity-50 hover:text-black hover:bg-gray-300 transition-all duration-200">
            My List
          </button>
        </div>
        {/* <h1 className="w-180 leading-6 pt-4 text-xs max-w-xs h-20"> */}
        {/* {truncate(movie?.overview, 150)} */}

        <Typography variant="body">
          Watch live on Sept. 2 as hot dog-eating champion Joey Chestnut faces
          off against rival Takeru Kobayashi in the ultimate wiener-takes-all
          competition.
        </Typography>
        {/* </h1> */}
      </div>
      <div className="absolute bottom-0 w-full h-30 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};

export default Banner;
