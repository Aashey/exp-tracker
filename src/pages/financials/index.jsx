import { Tabs, Space, Card, Drawer, Button } from "antd";
import IncomeForm from "../../components/Income";
import ExpenseForm from "../../components/Expense";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
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
            <items key="income" tab="Income">
              <IncomeForm
                drawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                type={tabKey}
              />
            </items>
            <items key="expense" tab="Expense">
              <ExpenseForm
                drawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                type={tabKey}
              />
            </items>
          </Tabs>
        </Drawer>
      </Card>
    </div>
  );
};

export default Finance;
