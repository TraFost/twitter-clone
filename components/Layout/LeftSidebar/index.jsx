import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { icon } from "@/assets/icon";
import pb from "@/lib/pocketbase";

const LeftSidebar = () => {
  const router = useRouter();
  const [width, setWidth] = useState(1005); // set the current state of the window width to 1005px, because i want to make if it less than 1005 the svg will change.

  // ** because the window object is not defined in server side rendering, the easy way is to use useEffect hook.
  // ** when the component is mounted, it will get the current window width, and set it to the state.
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth); // set the current window width to the state

    window.addEventListener("resize", handleWindowResize); // add event listener to the window, and call the handleWindowResize function when the window is resized. its like tracking the current width

    return () => window.removeEventListener("resize", handleWindowResize); // remove the event listener when the component is unmounted, a.k.a clean up function
  }, []);

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
