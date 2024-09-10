import Image from "next/image";
import netflixBanner from "@/public/netflixbanner.jpg";
import { Typography } from "../atomic/Typography";
import { Button, Stack } from "../atomic";

const Banner = () => {
  return (
    <Stack className="relative h-[45vw] justify-center">
      <div className="inset-0">
        <Image
          src={netflixBanner}
          layout="fill"
          objectFit="cover"
          alt="Netflix Banner"
          objectPosition="top"
          className="object-contain "
        />
      </div>
      <div className="relative flex flex-col pt-36 h-48 gap-4 w-[35.5vw] xl:w-[28.75vw] pl-[2.5vw]">
        <Typography variant="body">
          Once upon a time, a scheming queen and a bloodthirsty dragon messed
          with the wrong damsel. Millie Bobby Brown stars in this
          edge-of-your-seat adventure.
        </Typography>

        <Stack className="flex-row gap-3">
          <Button>Play</Button>
          <Button>More Info</Button>
        </Stack>
      </div>
      <div className="absolute bottom-0 w-full h-30 bg-gradient-to-b from-transparent to-black"></div>
    </Stack>
  );
};

export default Banner;
