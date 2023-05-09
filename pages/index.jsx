import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { icon } from "@/assets/icon";
import usePicture from "@/hooks/usePicture";
import pb from "@/lib/pocketbase";
import PageContainer from "@/components/Common/PageContainer";
import Container from "@/components/Common/Container";

export default function Home() {
  const [users, setUsers] = useState([]);

  // custom hook for getting picture link
  const linkPict = usePicture(users);

  useEffect(() => {
    (async () => {
      try {
        pb.autoCancellation(false);
        const { items } = await pb.collection("users").getList(1, 10);
        setUsers(items);
      } catch (err) {
        console.log(err);
      }
    })(); // IIFE, as soon the useEffect is called, it will be executed
  }, []);

  return (
    <PageContainer title="Explore / Twitter Clone" meta="home">
      <Container className="flex items-center justify-between px-3 pt-3">
        <h1 className="text-lg font-semibold tracking-wider">Explore</h1>
        <icon.settings />
      </Container>
      <Container className="pt-4 px-2.5">
        {users.map((user) => (
          <section key={user.id}>
            <div className="flex gap-2">
              <figure className="w-11">
                <Image
                  loader={() => linkPict} // custom function that solve the image URLs. get the image URL instead of loading it directly from the server.
                  src={linkPict}
                  alt={user.username}
                  width={48}
                  height={0}
                  className="rounded-full object-cover h-11"
                />
              </figure>
              {/* posts section */}
              <div>
                <div className="flex gap-2">
                  <h4 className="text-[15px] font-bold">{user.name}</h4>
                  <div className="flex gap-1 text-[#536471] text-sm">
                    <span>@{user.username}</span>
                    <span>.</span>
                    <span>4h</span>
                  </div>
                </div>
                <div>
                  <p className="text-[15px] tracking-wide basis-1/2">
                    test this a tweet, SIUUUU!
                  </p>
                  <figure className="pt-2 w-full">
                    <Image
                      loader={() =>
                        "https://pbs.twimg.com/media/FvrYY08XwAAZxJ5?format=jpg&name=small"
                      }
                      src="https://pbs.twimg.com/media/FvrYY08XwAAZxJ5?format=jpg&name=small"
                      alt={user.username}
                      width={415}
                      height={300}
                      className="rounded-xl"
                    />
                  </figure>
                  <div></div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </Container>
    </PageContainer>
  );
}
