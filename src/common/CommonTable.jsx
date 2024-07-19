import React from "react";
import { Table } from "antd";

const CommonTable = ({ dataSource, dataColumn }) => {
  const renderRowKey = (record) => record.id;
  return (
    <>
      <Table
        rowKey={renderRowKey}
        dataSource={dataSource ?? []}
        columns={dataColumn}
      />
    </>
  );
};

export default CommonTable;
