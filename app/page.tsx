"use client";

import Image from "next/image";
import BackgroundImage from "../src/assets/background.jpg";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAccessToken } from "@/src/state/slices/accessTokenSlice";
import { fetchVimeoAccessToken } from "@/src/api/vimeo";
import Cookies from "js-cookie";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const token = await fetchVimeoAccessToken();
      dispatch(setAccessToken(token));
      Cookies.set("accessToken", token, { expires: 7 }); // Set the token in a cookie
      router.push("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-[92vh] flex align-center justify-center">
      <Image
        src={BackgroundImage}
        fill
        alt="A list of really cool movies that you can watch on netflix"
        className="relative h-screen z-[-1] opacity-50 object-cover"
      />

      <div className="flex flex-col items-center justify-center m-auto gap-4">
        <h1 className="font-semibold">Unlimited movies, TV shows, and more</h1>
        <p className="text-2xl "> Watch anywhere. Cancel anytime.</p>
        <h3 className="mb-2 mt-4">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <button
          onClick={handleLogin}
          className="py-3 px-10 bg-primary rounded-[6px] font-semibold text-md"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
