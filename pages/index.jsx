import Link from "next/link";

import { icon } from "@/assets/icon";
import PageContainer from "@/components/Common/PageContainer";
import Container from "@/components/Common/Container";

export default function Home() {
  return (
    <PageContainer title="Explore / Twitter Clone" meta="home">
      <Container className="flex items-center justify-between px-3 pt-3">
        <h1 className="text-lg font-semibold tracking-wider">Explore</h1>
        <icon.settings className="" />
      </Container>
    </PageContainer>
  );
}
