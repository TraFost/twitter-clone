import { Sidebar, WhoToFollow } from "@/components/Layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-4">
      <Sidebar />
      <Component {...pageProps} />
      <WhoToFollow />
    </div>
  );
}
