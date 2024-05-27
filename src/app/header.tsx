import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/signout-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Header() {
  const session = await auth();
  return (
    <div className="bg-gray-200">
      <div className="container flex justify-between items-center">
        <div className="flex gap-12 items-center">
          <Link
            href="/"
            className="hover:underline cursor-pointer flex items-center py-2 gap-1"
          >
            <Image src={"/logo.png"} alt="logo" width={50} height={50} />
            BidBuddy.com
          </Link>

          <Link
            href="/items/create"
            className="hover:underline cursor-pointer flex items-center py-2 gap-1"
          >
            Action an Item
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">{session?.user?.name}</div>
          <div>{session ? <SignOut /> : <SignIn />}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
