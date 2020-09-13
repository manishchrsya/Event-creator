import React, { useEffect, useState } from "react";
import "./AddEvent.css";
import { Modal, Button, Form, Input, DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import { eventTypeListAPi } from "../../services/event";
import Axios from "axios";

const { Option } = Select;

const AddEvent = () => {
  const [visible, setVisible] = useState(false);
  const [typeList, setTypeList] = useState([]);
  const [addEventData, setAddEventData] = useState({});
  const createEventUrl = "https://ik-react-task.herokuapp.com/events/";

  const token = "Bearer" + " " + localStorage.getItem("token").toString();

  console.log(addEventData);

  const createEvent = () => {
    return Axios.post(
      createEventUrl,
      {
        name: addEventData.name,
        event_type: addEventData.event_type,
        start: addEventData.start,
        end: addEventData.end,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
      .then((response) => console.log(response))
      .catch((err) => err);
  };

  const onFinish = (values) => {
    values.start = values.start.format();
    values.end = values.end.format();
    setAddEventData(values);
  };

  const eventTypeList = async () => {
    const lists = await eventTypeListAPi();
    if (lists && lists.length > 0) {
      setTypeList(lists);
    }
  };

  useEffect(() => {
    createEvent();
  }, [
    {
      name: addEventData.name,
      event_type: addEventData.event_type,
      start: addEventData.start,
      end: addEventData.end,
    },
  ]);

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
        onCancel={() => setVisible(false)}
        onSubmit={() => setVisible(false)}
        width="40%"
        footer={null}
      >
        <Form name="nest-messages" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Event Name"
            rules={[{ required: true }]}
            style={{
              textAlign: "left",
              display: "flex",
            }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="event_type"
            label="Event Type"
            rules={[{ required: true }]}
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
          <Form.Item
            name="start"
            label="Start Date"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item name="end" label="End Date" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddEvent;
