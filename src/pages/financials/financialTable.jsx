import React from "react";
import CommonTable from "../../common/CommonTable";
import { CapitalizeStarting } from "../../helpers/capitalize";

const FinancialTable = ({ tableData }) => {
  const column = [
    {
      title: "S.N.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Financials Type",
      dataIndex: "financials_type",
      key: "financials_type",
      render: (value) => CapitalizeStarting(value),
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      render: (value) => CapitalizeStarting(value),
    },
    {
      title: "Other Source",
      dataIndex: "other_source",
      key: "other_source",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (value) => `Rs. ${value}`,
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
    },
  ];

  return (
    <>
      <CommonTable dataSource={tableData ?? []} dataColumn={column} />
    </>
  );
};

export default FinancialTable;
