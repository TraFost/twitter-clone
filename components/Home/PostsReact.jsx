import { useEffect, useRef } from "react";

import { iconPosts } from "@/assets/icon";
import useResize from "@/hooks/UseResize";

const PostsReact = () => {
  const [width] = useResize();

  return (
    <div className="pl-1 pt-3 flex gap-[0.45rem] sm:gap-[0.85rem] md:gap-[0.9rem]">
      {iconPosts.map((Icon, idx) => (
        <div className="container--reactPosts" key={idx}>
          {(width < 425 && idx === 3) ||
          (width < 315 && idx === 5) ||
          (width < 250 && idx === 4) ? null : (
            <>
              <div className="">
                <Icon className="text-lg md:text-base my-1 mx-[0.15rem]" />
              </div>

              {idx === 4 ? null : (
                <span className="text-[10px] sm:text-xs pt-1">
                  {idx !== 5 ? "Test" : "Tip"}
                </span>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostsReact;
