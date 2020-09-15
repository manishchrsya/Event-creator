import React, { useState } from "react";
import "./AddEvent.css";
import { Modal, Button, Form, Input, DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import Axios from "axios";
import Moment from "moment";

const { Option } = Select;

const AddEvent = (props) => {
  const [visible, setVisible] = useState(false);
  const [typeList, setTypeList] = useState([]);
  const [nameDataFromInput, setNameDataFromInput] = useState("");
  const [eventTypeDataFromInput, setEventTypeDataFromInput] = useState("");
  const [startDateDataFromInput, setStartDateDataFromInput] = useState("");
  const [endDateDataFromInput, setEndDateDataFromInput] = useState("");
  const { getEventList } = props;
  const createEventUrl = "https://ik-react-task.herokuapp.com/events/";
  const createEventListUrl =
    "https://ik-react-task.herokuapp.com/events/event_types/";
  const token = "Bearer" + " " + localStorage.getItem("token");

  const createEvent = () => {
    return Axios.post(
      createEventUrl,
      {
        name: nameDataFromInput,
        event_type: eventTypeDataFromInput,
        start: startDateDataFromInput,
        end: endDateDataFromInput,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
      .then((response) => {
        console.log(response);
        getEventList();
      })
      .catch((err) => err);
  };

  const eventTypeList = () => {
    return Axios.get(createEventListUrl, {
      headers: {
        Authorization: token,
      },
    })
      .then((result) => {
        // console.log("result", result.data);
        const lists = result.data;
        if (lists && lists.length > 0) {
          setTypeList(lists);
        }
      })
      .catch((err) => {});
  };
  // const eventTypeList = async () => {
  //   const lists = await eventTypeListAPi();
  //   if (lists && lists.length > 0) {
  //     setTypeList(lists);
  //   }
  // };

  // This function gets called when clicking the add button from the Modal

  const onFinish = () => {
    createEvent();
    setVisible(false);
  };

  // Extracting event details from the add event form and storing in state...

  const handleOnEventNameChange = (event) => {
    const { value } = event.target;
    setNameDataFromInput(value);
  };

  const handleOnEventTypeChange = (item) => {
    setEventTypeDataFromInput(item);
  };

  const handleOnEventStartDateChange = (value) => {
    const startDate = Moment(value).format();
    setStartDateDataFromInput(startDate);
  };

  const handleOnEventEndDateChange = (value) => {
    const endDate = Moment(value).format();
    setEndDateDataFromInput(endDate);
  };

  // function to open Modal to create the event.........

  const handleOnAddNewEventButtonClick = () => {
    setVisible(true);
    eventTypeList();
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "green" }}
        type="primary"
        onClick={() => handleOnAddNewEventButtonClick()}
      >
        Add New Event
      </Button>
      <Modal
        title="Add New Event"
        centered
        visible={visible}
        onCancel={() => setVisible(false)}
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
            <Input onChange={handleOnEventNameChange} />
          </Form.Item>
          <Form.Item
            name="event_type"
            label="Event Type"
            rules={[{ required: true }]}
          >
            <Select onSelect={handleOnEventTypeChange} placeholder="Event type">
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
            <DatePicker onChange={handleOnEventStartDateChange} />
          </Form.Item>

          <Form.Item name="end" label="End Date" rules={[{ required: true }]}>
            <DatePicker onChange={handleOnEventEndDateChange} />
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
