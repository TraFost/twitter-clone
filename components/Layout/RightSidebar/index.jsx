import pb from "@/lib/pocketbase";

import Login from "@/components/RightSidebar/Login";
import Footer from "@/components/Layout/Footer";

const RightSidebar = () => {
  const loggedIn = pb.authStore.isValid;

  return (
    <div className="hidden lg:block lg:col-span-2 lg:row-span-2 lg:justify-self-center">
      <Login />
      <Footer />
    </div>
  );
};

export default RightSidebar;
