import { iconPosts } from "@/assets/icon";

import useResize from "@/hooks/UseResize";

const PostsReact = () => {
  const [width] = useResize();

  return (
    <div className="pl-1 pt-3 flex gap-[0.45rem] sm:gap-[0.85rem] md:gap-[1.2rem]">
      {iconPosts.map((Icon, idx) => (
        <div
          className="text-[#536471] text-sm flex items-center justify-center  sm:gap-1.5 min-w-fit"
          key={idx}
        >
          {(width < 425 && idx === 3) || (width < 315 && idx === 5) ? null : (
            <>
              <Icon className="text-sm" />
              {idx === 4 ? null : (
                <span className="text-xs">{idx !== 5 ? "Test" : "Tip"}</span>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostsReact;
