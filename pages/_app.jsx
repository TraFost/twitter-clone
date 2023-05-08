import { Sidebar, WhoToFollow, CallToAction } from "@/components/Layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-5 grid-rows-2 overflow-y-scroll h-screen">
      <Sidebar />
      <Component {...pageProps} />
      <WhoToFollow />
      <CallToAction />
    </div>
  );
}
