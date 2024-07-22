import { Card } from "antd";
import DashboardHeader from "../../components/DashboardHeader";
const Dashboard = () => {
  return (
    <>
      <Card
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DashboardHeader />
      </Card>
    </>
  );
};

export default Dashboard;
