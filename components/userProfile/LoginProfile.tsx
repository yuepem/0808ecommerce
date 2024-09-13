import React from "react";
import { auth } from "@/server/auth";
import Link from "next/link";

import { Button } from "@/components/ui/button";
// import { KeyRound } from "lucide-react";

import UserProfile from "@/components/userProfile/UserProfile";

export default async function UserProfileWithAuth() {
  const session = await auth();

  return (
    <div>cursor
      {!session ? (
        <div className=" px-10">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Welcome Back</h1>
            <h2 className="text-lg">
              Sign in to your account. Or continue shopping
            </h2>
          </div>
          <div className="flex flex-col gap-3 pt-4">
            <Link href="/auth/login">
              <Button className="w-60">Sign in</Button>
            </Link>
            <Link href="/">
              <Button className="w-60">Continue shopping</Button>
            </Link>
          </div>
        </div>
      ) : (
        <UserProfile />
      )}
    </div>
  );
}
