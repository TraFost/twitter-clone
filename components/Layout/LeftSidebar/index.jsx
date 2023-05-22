import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { icon } from "@/assets/icon";
import useResize from "@/hooks/UseResize";

const LeftSidebar = () => {
  const router = useRouter();
  const [width] = useResize();

  return (
    <aside className="container--leftSidebar">
      <div className="flex items-center justify-center hover:bg-gray-200 hover:rounded-[50%] max-w-[2.3rem] min-w-fit ml-1 lg:ml-0">
        <icon.twitter className="text-twitter-color text-[29px]" />
      </div>
      <nav className="pt-5 lg:pt-3.5">
        <ul className="flex flex-col gap-3 md:gap-2 lg:gap-0">
          <li>
            {width < 1005 ? <icon.search /> : <icon.hashtag />}
            <Link href="#" className="tracking-wide">
              Explore
            </Link>
          </li>
          <li>
            <icon.settings />
            <Link href="#" className="tracking-wider">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
