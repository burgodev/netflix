import { Banner } from "@/src/components/atomic/Banner";

import { auth } from "@clerk/nextjs/server";

export default function Home() {
  auth().protect();
  return (
    <>
      <Banner />
    </>
  );
}
