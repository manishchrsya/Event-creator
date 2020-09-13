import React, { useEffect, useState } from "react";
import "./AddEvent.css";

import { Modal, Button, Form, Input, DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import { eventTypeListAPi } from "../../services/event";

const { Option } = Select;
// const { RangePicker } = DatePicker;

// componnet
const AddEvent = () => {
  const [visible, setVisible] = useState(false);
  const [typeList, setTypeList] = useState([]);

  const onFinish = (values) => {
    console.log(values);
  };

  const eventTypeList = async () => {
    const lists = await eventTypeListAPi();
    if (lists && lists.length > 0) {
      setTypeList(lists);
    }
  };

  useEffect(() => {
    eventTypeList();
  }, []);

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        Add New Event
      </Button>
      <Modal
        title="Add New Event"
        centered
        visible={visible}
        // onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width="40%"
        footer={null}
      >
        <Form
          name="nest-messages"
          onFinish={onFinish}
          //   validateMessages={validateMessages}
        >
          <Form.Item
            // name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
            style={{
              textAlign: "left",
              display: "flex",
              backgroundColor: "red",
            }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="select"
            label="Select"
            rules={[
              {
                required: true,
                message: "Please select the type of event!",
              },
            ]}
          >
            <Select placeholder="Event type">
              {typeList &&
                typeList.length > 0 &&
                typeList.map((list, index) => (
                  <Option key={index} value={list}>
                    {list}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          {/* <Form.Item name="range-picker" label="RangePicker">
            <RangePicker />
          </Form.Item> */}
          <Form.Item>
            <label>Start Date</label>
            <input type="date" />
          </Form.Item>
          <Form.Item>
            <Form.Item>
              <label>End Date</label>
              <input type="date" />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddEvent;
