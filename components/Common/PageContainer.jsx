import Head from "next/head";
import { useRouter } from "next/router";

const PageContainer = ({ children, title, meta }) => {
  const { route } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/logo-withnobg.png" />
      </Head>
      <main className={route === "/" && "container--explore"}>{children}</main>
    </>
  );
};

export default PageContainer;
