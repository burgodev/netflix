import Image from "next/image";
import { Typography } from "../atomic/Typography";
import { Button, Stack } from "../atomic";
import { Video } from "@/src/types/api";

type BannerProps = {
  videos: Video[];
};

const randomIndex = Math.floor(Math.random() * 20);

const Banner = ({ videos }: BannerProps) => {
  const { backgroundImage, overview } = videos[randomIndex];

  return (
    <Stack className="relative w-screen h-[50vh] md:h-[45vw] justify-center">
      <Image
        src={backgroundImage}
        layout="fill"
        objectFit="cover"
        alt="Netflix Banner"
        objectPosition="top"
        className="object-contain"
      />
      {/* Image overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent h-[65%] mt-auto" />
      <div className="relative flex flex-col pt-36 h-48 gap-4 w-[35.5vw] xl:w-[28.75vw] pl-[2.5vw]">
        <Typography variant="body">{overview}</Typography>

        <Stack className="flex-row gap-3">
          <Button>Play</Button>
          <Button>More Info</Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default Banner;
