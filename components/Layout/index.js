import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import CallToAction from "./CallToAction";
import PageContainer from "../Common/PageContainer";

const Layout = ({ title, meta, children }) => {
  return (
    <>
      <div className="container--main">
        <LeftSidebar />
        <PageContainer title={title} meta={meta}>
          {children}
        </PageContainer>
        <RightSidebar />
      </div>
      <div className="h-full sticky bottom-0">
        <CallToAction />
      </div>
    </>
  );
};

export default Layout;
