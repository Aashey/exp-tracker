import { Tabs, Space, Card, Drawer, Button } from "antd";
import IncomeForm from "../../components/Income";
import ExpenseForm from "../../components/Expense";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import TabPane from "antd/es/tabs/TabPane";
const Finance = () => {
  const [tabKey, setTabKey] = useState("income");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { items } = Tabs;

  const handleTabChange = (key) => {
    setTabKey(key);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div>
      <Card style={{ width: "80%", margin: "auto" }} title="Financials">
        <Button icon={<PlusOutlined />} onClick={openDrawer} type="primary">
          Add Financials
        </Button>
        <Drawer
          title="Add Financials"
          onClose={closeDrawer}
          width={"40%"}
          open={isDrawerOpen}
        >
          <Tabs onChange={handleTabChange}>
            <TabPane key="income" tab="Income">
              <IncomeForm
                drawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                type={tabKey}
              />
            </TabPane>
            <TabPane key="expense" tab="Expense">
              <ExpenseForm
                drawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                type={tabKey}
              />
            </TabPane>
          </Tabs>
        </Drawer>
      </Card>
    </div>
  );
};

export default Finance;
