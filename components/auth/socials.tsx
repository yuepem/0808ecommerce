"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";

export default function Socials() {
  return (
    <div className="flex flex-col items-center w-full">
      <Button
        className=" outline outline-2 rounded-full"
        onClick={() =>
          signIn("google", {
            redirect: false,
            callbackUrl: "/",
          })
        }
      >
        <FcGoogle size={20} />
        <p className="p-2">Sign in with Google</p>
      </Button>
    </div>
  );
}
