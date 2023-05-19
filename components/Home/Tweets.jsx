import Image from "next/image";

import useResize from "@/hooks/UseResize";

import PostsReact from "./PostsReact";

const Tweets = ({ user, linkPict, id }) => {
  const [width] = useResize();

  return (
    <section className="pt-6">
      {[1, 2, 3].map((_, i) => (
        <section key={i} className="container--tweets">
          <figure className="max-w-[3rem] min-w-fit">
            <Image
              loader={() => linkPict} // custom function that solve the image URLs. get the image URL instead of loading it directly from the server.
              src={linkPict}
              alt={user.username}
              width={45}
              height={0}
              className="rounded-full object-cover min-h-[2.75rem]"
            />
          </figure>
          {/* posts section */}
          <div className={width < 283 ? "min-w-[2rem]" : undefined}>
            <div className="flex gap-2 flex-nowrap items-center sm:items-start">
              <h4
                className={
                  width < 281
                    ? "text-xs font-bold truncate basis-10"
                    : "text-xs sm:text-[15px] font-bold"
                }
              >
                {user.name}
              </h4>
              <div className="flex gap-1 text-[#536471] text-xs sm:text-sm items-end">
                <span className={width < 281 ? "basis-10 truncate" : undefined}>
                  @{user.username}
                </span>
                <span>·</span>
                <span>4h</span>
              </div>
            </div>
            <div className="min-w-fit">
              <p className="text-xs sm:text-[15px] tracking-wide">
                test this a tweet, SIUUUU!
              </p>
              <figure className="pt-2 max-w-[70%] sm:max-w-[85%] md:max-w-[95%] lg:max-w-full">
                <Image
                  src="https://pbs.twimg.com/media/FvrYY08XwAAZxJ5?format=jpg&name=small"
                  width={480}
                  height={300}
                  alt={`posted by : ${user.username}`}
                  className="rounded-xl h-auto object-cover"
                />
              </figure>
              <PostsReact />
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Tweets;
