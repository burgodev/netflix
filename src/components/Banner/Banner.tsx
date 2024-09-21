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
    <Stack className="relative w-screen h-[65vh] sm:h-[75vh] md:h-[60vw] lg:h-[55vw] xl:h-[40vw] xxl:h-[40vw] justify-end">
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

      <div className="relative flex flex-col gap-4 w-[80vw] sm:w-[60vw] md:w-[50vw] xl:w-[35vw] xxl-[25vw] p-[16px] md:p-[2.5vw] md:pb-[5vw] ">
        <Typography variant="body">{overview}</Typography>
        <Stack className="flex-row gap-3">
          <Button className="text-[2vw] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[1vw] xl:px-[2.5vw] xl:py-[0.5vw]">
            Play
          </Button>
          <Button className="text-[2vw] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[1vw] xl:px-[2.5vw] xl:py-[0.5vw]">
            More Info
          </Button>
        </Stack>
      </div>
    </Stack>
  );
};

export default Banner;
