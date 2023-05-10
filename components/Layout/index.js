import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import CallToAction from "./CallToAction";
import PageContainer from "../Common/PageContainer";

const Layout = ({ title, meta, children }) => {
  return (
    <div className="grid grid-cols-none lg:grid-cols-5 grid-rows-2 h-screen">
      <LeftSidebar />
      <PageContainer title={title} meta={meta}>
        {children}
      </PageContainer>
      <RightSidebar />
      <CallToAction />
    </div>
  );
};

export default Layout;
