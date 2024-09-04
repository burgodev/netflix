import { Banner } from "@/src/components/Banner";
import { VideoList } from "@/src/components/VideoList";

import { auth } from "@clerk/nextjs/server";

export default function Home() {
  auth().protect();
  return (
    <div className="w-[100%] pl-[2.5vw]">
      <Banner />
      <VideoList />
    </div>
  );
}
