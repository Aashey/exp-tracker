import { Button, Form, Input, InputNumber, Select, Typography } from "antd";
import { incomeSources, expenseSources } from "../../helpers/sourceDatas";
import { useEffect, useReducer, useState } from "react";
import { CapitalizeStarting } from "../../helpers/capitalize";
import { InfoCircleOutlined } from "@ant-design/icons";
// const formReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_FIELD":
//       return {
//         ...state,
//         formField: {
//           ...state.formField,
//           [action.payload.name]: action.payload.value,
//         },
//       };
//     case "RESET_FORM":
//       return {
//         formField: {},
//       };
//     default:
//       return state;
//   }
// };

const FinanceForm = ({ type, closeDrawer, drawerOpen }) => {
  // const [state, dispatch] = useReducer(formReducer, {
  //   formField: {},
  // });
  const [form] = Form.useForm();
  const { Title, Text, Link } = Typography;
  const [formData, setFormData] = useState([]);
  const [otherSelected, setOtherSelected] = useState(false);

  const handleFormSubmit = (value) => {
    const updatedValue = {
      financials_type: type,
      source: value["source"],
      other_source: null,
      ...value,
    };
    setFormData([...formData, updatedValue]);
    form.resetFields();
    closeDrawer();
  };
  // const handleInputChange = (e) => {
  //   dispatch({
  //     type: "SET_FIELD",
  //     payload: { name: e.name, value: e.value },
  //   });
  // };
  useEffect(() => {
    form.resetFields();
    setOtherSelected(false);
  }, [type, drawerOpen]);

  const onValuesChange = (changedValues, allValues) => {
    // console.log(changedValues);
    console.log({ ...allValues, type: type });
    if (allValues.source === "others") {
      setOtherSelected(true);
    } else {
      setOtherSelected(false);
    }
  };

  const initial_form_values = {};
  return (
    <>
      <Form
        onFinish={handleFormSubmit}
        form={form}
        layout="vertical"
        initialValues={initial_form_values}
        onValuesChange={onValuesChange}
      >
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <Form.Item
          name="source"
          label={<Text strong>Select an {type} source</Text>}
          rules={[
            {
              required: true,
              message: `${CapitalizeStarting(type)} source is required.`,
            },
          ]}
        >
          <Select
            placeholder="Select Source"
            options={type === "income" ? incomeSources : expenseSources}
            allowClear
          />
        </Form.Item>

        {otherSelected ? (
          <Form.Item
            name="other_source"
            label={<Text strong>Other source</Text>}
            rules={[
              {
                required: true,
                message: "Other source is required if source is others.",
              },
            ]}
          >
            <Input placeholder="Enter other source" />
          </Form.Item>
        ) : (
          ""
        )}

        <Form.Item
          label={<Text strong>{CapitalizeStarting(type)} amount</Text>}
          placeholder="Enter Amount"
          name="amount"
          rules={[{ required: true, message: "Amount is required." }]}
        >
          <InputNumber
            style={{ width: "100%" }}
            placeholder="Enter Amount"
            addonBefore="Rs."
          />
        </Form.Item>

        <Form.Item
          name="remarks"
          label={<Text strong>Remarks</Text>}
          rules={[{ required: true, message: "Remarks is required." }]}
        >
          <Input
            suffix={<InfoCircleOutlined style={{ color: "coral" }} />}
            placeholder="Enter Remarks"
            name="remarks"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" style={{ width: "40%" }} type="primary">
            Add {CapitalizeStarting(type)}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FinanceForm;
