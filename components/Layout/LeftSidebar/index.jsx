import { useRouter } from "next/router";
import Link from "next/link";

import { icon } from "@/assets/icon";
import pb from "@/lib/pocketbase";

const LeftSidebar = () => {
  const router = useRouter();

  return (
    <aside className="ml-[3.15rem] mt-2.5 justify-self-end lg:justify-self-start lg:self-start">
      <div className="flex items-center justify-center hover:bg-gray-200 hover:rounded-[50%] max-w-[2.3rem] min-w-fit">
        <icon.twitter className="text-twitter-color text-[28px]" />
      </div>
      <nav className="pt-3.5">
        <ul className="flex flex-col">
          <li>
            <icon.hashtag className="text-xl" />
            <Link href="#" className="text-xl hidden lg:block">
              Explore
            </Link>
          </li>
          <li>
            <icon.settings className="text-xl" />
            <Link href="#" className="text-xl tracking-wide hidden lg:block">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
