import { Banner } from "@/src/components/Banner";
import { VideoContentWrapper } from "@/src/components/VideoContentWrapper";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  auth().protect();

  return (
    <>
      <Banner />
      <VideoContentWrapper />
    </>
  );
}
