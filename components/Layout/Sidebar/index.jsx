import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { icon } from "@/assets/icon";
import pb from "@/lib/pocketbase";

const Sidebar = () => {
  const router = useRouter();

  return (
    <header className="ml-[3.3rem] mt-2.5">
      <div className="grid place-items-center hover:bg-gray-200 hover:rounded-full w-[15%] h-[30%]">
        <icon.twitter className="text-blue-500 text-3xl" />
      </div>
      <nav className="pt-4">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-4 w-[55%] py-1.5 pl-2">
            <icon.hashtag className="text-xl" />
            <Link href="#" className="text-xl">
              Explore
            </Link>
          </li>
          <li className="flex items-center gap-4 w-[55%] py-1.5 pl-2">
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
