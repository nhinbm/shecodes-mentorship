import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ width: "100vw", overflowX: "hidden" }}>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default MainLayout;
