import React, { useState } from "react";
import "./AddEvent.css";
import { Modal, Button, Form, Input, DatePicker, Select } from "antd";

import Axios from "axios";
import Moment from "moment";
const { Option } = Select;

const AddEvent = (props) => {
  const [visible, setVisible] = useState(false);
  const [typeList, setTypeList] = useState([]);
  const [nameDataFromInput, setNameDataFromInput] = useState("");
  const [eventTypeDataFromInput, setEventTypeDataFromInput] = useState("");
  const [eventDateDataFromInput, setEventDateDataFromInput] = useState("");
  const [
    eventStartTimeDataFromInput,
    setEventStartTimeDataFromInput,
  ] = useState("");
  const [eventEndTimeDataFromInput, setEventEndTimeDataFromInput] = useState(
    ""
  );

  const { getEventList } = props;
  const createEventUrl = "https://ik-react-task.herokuapp.com/events/";
  const createEventListUrl =
    "https://ik-react-task.herokuapp.com/events/event_types/";
  const token = "Bearer" + " " + localStorage.getItem("token");

  const timeSlotArray = [
    "10:00:00 - 10:30:00",
    "10:30:00 - 11:00:00",
    "11:00:00 - 11:30:00",
    "11:30:00 - 12:00:00",
    "12:00:00 - 12:30:00",
    "12:30:00 - 01:00:00",
    "01:00:00 - 01:30:00",
    "01:30:00 - 02:00:00",
    "02:00:00 - 02:30:00",
    "02:30:00 - 03:00:00",
    "03:00:00 - 03:30:00",
    "03:30:00 - 04:00:00",
    "04:00:00 - 04:30:00",
    "04:30:00 - 05:00:00",
    "05:00:00 - 05:30:00",
    "05:30:00 - 06:00:00",
    "06:00:00 - 06:30:00",
    "06:30:00 - 07:00:00",
    "07:00:00 - 07:30:00",
    "07:30:00 - 08:00:00",
    "08:00:00 - 08:30:00",
    "08:30:00 - 06:00:00",
    "06:00:00 - 06:30:00",
    "06:30:00 - 07:00:00",
  ];

  //.create event post api called.........

  const createEvent = () => {
    return Axios.post(
      createEventUrl,
      {
        name: nameDataFromInput,
        event_type: eventTypeDataFromInput,
        start:
          eventDateDataFromInput + "T" + eventStartTimeDataFromInput + "+05:30",
        end:
          eventDateDataFromInput + "T" + eventEndTimeDataFromInput + "+05:30",
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
      .catch((err) => alert("This slot is already booked!!"));
  };

  // event list Api called.............................................

  const eventTypeList = () => {
    return Axios.get(createEventListUrl, {
      headers: {
        Authorization: token,
      },
    })
      .then((result) => {
        const lists = result.data;
        if (lists && lists.length > 0) {
          setTypeList(lists);
        }
      })
      .catch((err) => {});
  };

  // This function gets called when clicking the add button from the Modal

  const onFinish = () => {
    createEvent();
    setVisible(false);
  };

  // Extracting event details from the add event form and storing in state...

  const handleOnEventNameChange = (event) => {
    // Name
    const { value } = event.target;
    setNameDataFromInput(value);
  };

  const handleOnEventTypeChange = (item) => {
    //Event Type
    setEventTypeDataFromInput(item);
  };

  const handleOnEventStartDateChange = (value) => {
    // Event date
    const startDate = Moment(value).format("YYYY-MM-DD");
    setEventDateDataFromInput(startDate);
  };

  const handleOnEventTimeslot = (time) => {
    const slot = time.split(" - ");
    setEventStartTimeDataFromInput(slot[0]);
    setEventEndTimeDataFromInput(slot[1]);
  };

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
            label="Event Date"
            rules={[{ required: true }]}
          >
            <DatePicker onChange={handleOnEventStartDateChange} />
          </Form.Item>
          <Form.Item
            name="event slot"
            label="Time Slot"
            rules={[{ required: true }]}
          >
            <Select onSelect={handleOnEventTimeslot} placeholder="Time slot">
              {timeSlotArray &&
                timeSlotArray.length > 0 &&
                timeSlotArray.map((time, index) => (
                  <Option key={index} value={time}>
                    {time}
                  </Option>
                ))}
            </Select>
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
