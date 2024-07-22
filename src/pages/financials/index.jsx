import { Tabs, Space, Card, Drawer, Button } from "antd";
import IncomeForm from "../../components/Income";
import ExpenseForm from "../../components/Expense";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import TabPane from "antd/es/tabs/TabPane";
import CommonTable from "../../common/commonTable/CommonTable";
import FinancialTable from "./financialTable";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import dayjs from "dayjs";
import Header from "../../common/header/Header";

const Finance = () => {
  const [tabKey, setTabKey] = useState("income");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { TabPane } = Tabs;
  const [financialsData, setFinancialsData] = useState([]);

  const handleTabChange = (key) => {
    setTabKey(key);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawer = () => {
    setTabKey("income");
    setIsDrawerOpen(false);
  };

  const handleDataSave = (data) => {
    const id = financialsData.length + 1;
    const updatedValue = {
      id: id,
      ...data,
      date: dayjs(new Date()).format("YYYY-MM-DD"),
    };
    setFinancialsData([...financialsData, updatedValue]);
  };

  return (
    <div>
      <Card style={{ width: "80%", margin: "auto" }} title="Financials">
        <Button
          icon={<BsFillJournalBookmarkFill size={16} />}
          onClick={openDrawer}
          style={{ marginBottom: "20px" }}
          type="primary"
        >
          Add Financials
        </Button>
        <Drawer
          title="Add Financials"
          onClose={closeDrawer}
          width={"40%"}
          open={isDrawerOpen}
        >
          <Tabs activeKey={tabKey} onChange={handleTabChange}>
            <TabPane key="income" tab="Income">
              <IncomeForm
                onSave={handleDataSave}
                drawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                type={tabKey}
              />
            </TabPane>
            <TabPane key="expense" tab="Expense">
              <ExpenseForm
                onSave={handleDataSave}
                drawerOpen={isDrawerOpen}
                closeDrawer={closeDrawer}
                type={tabKey}
              />
            </TabPane>
          </Tabs>
        </Drawer>

        <FinancialTable tableData={financialsData} />
      </Card>
      <pre>{JSON.stringify(financialsData, null, 2)}</pre>
    </div>
  );
};

export default Finance;
