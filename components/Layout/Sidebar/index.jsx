import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { icon } from "@/assets/icon";
import pb from "@/lib/pocketbase";

const Sidebar = () => {
  const router = useRouter();

  return (
    <header className="ml-[3.3rem] mt-2 self-start">
      <div className="grid place-items-center hover:bg-gray-200 hover:rounded-full w-[15%] h-[30%]">
        <icon.twitter className="text-twitter-color text-3xl" />
      </div>
      <nav className="pt-4">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-[1.2rem] w-[70%] pb-2 pl-1">
            <icon.hashtag className="text-xl" />
            <Link href="#" className="text-xl">
              Explore
            </Link>
          </li>
          <li className="flex items-center gap-[1.2rem] w-[70%] pl-1 pb-2">
            <icon.settings className="text-xl" />
            <Link href="#" className="text-xl tracking-wide">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
