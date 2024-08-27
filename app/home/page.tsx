import { Banner } from "@/src/components/Banner";

import { auth } from "@clerk/nextjs/server";

export default function Home() {
  auth().protect();
  return (
    <div className="w-[100%]">
      <Banner />
    </div>
  );
}
