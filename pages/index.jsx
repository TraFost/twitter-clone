import { useRouter } from "next/router";
import Link from "next/link";

import PageContainer from "@/components/Common/PageContainer";

export default function Home() {
  const router = useRouter();

  console.log(router);

  return (
    <PageContainer title="Explore / Twitter Clone" meta="home">
      <h1>Explore</h1>
    </PageContainer>
  );
}
