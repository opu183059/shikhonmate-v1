import { Layout } from "antd";
import DashboardSidebar from "../components/shared/DashboardSidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/shared/DashboardHeader";

const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <DashboardSidebar />
      <Layout style={{ background: "#fff" }}>
        <DashboardHeader />
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="dashboard-content">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
