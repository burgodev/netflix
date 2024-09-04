import Image from "next/image";
import netflixBanner from "@/public/netflixbanner.jpg";
import { Typography } from "../atomic/Typography";
import { Button } from "../atomic";

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
      <div className="absolute flex flex-col pt-36 h-48 gap-4 max-w-[35vw]">
        <h1 className="text-3xl font-extrabold pb-1">Narcos</h1>
        <Typography variant="body">
          Watch live on Sept. 2 as hot dog-eating champion Joey Chestnut faces
          off against rival Takeru Kobayashi in the ultimate wiener-takes-all
          competition.
        </Typography>
        <div className="flex gap-3">
          <Button>Play</Button>
          <Button>More Info</Button>
        </div>
        {/* <h1 className="w-180 leading-6 pt-4 text-xs max-w-xs h-20"> */}
        {/* {truncate(movie?.overview, 150)} */}

        {/* </h1> */}
      </div>
      <div className="absolute bottom-0 w-full h-30 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};

export default Banner;
