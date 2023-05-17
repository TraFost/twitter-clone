import { useEffect, useState } from "react";

import { icon } from "@/assets/icon";
import usePicture from "@/hooks/usePicture";
import useResize from "@/hooks/UseResize";
import pb from "@/lib/pocketbase";

import Layout from "@/components/Layout";
import Tweets from "@/components/Home/Tweets";
import SearchBar from "@/components/Home/SearchBar";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [width] = useResize();

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
    <Layout title="Explore / Twitter Clone" meta="home">
      {width < 493 ? (
        <SearchBar />
      ) : (
        <div className="flex items-center justify-between px-3 pt-3 min-w-fit">
          <h1 className="text-xl font-semibold tracking-wider">Explore</h1>
          <icon.settings />
        </div>
      )}
      {users.map((user) => (
        <Tweets user={user} key={user.id} linkPict={linkPict} />
      ))}
    </Layout>
  );
}
