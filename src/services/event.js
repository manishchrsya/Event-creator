import Axios from "axios";

const BaseUrl = "https://ik-react-task.herokuapp.com/events/event_types/";

const token =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNTksInVzZXJuYW1lIjoiS21hbmlzaEBnbWFpbC5jb20iLCJleHAiOjE2MDA1Mzk3MDAsImVtYWlsIjoiS21hbmlzaEBnbWFpbC5jb20ifQ.IQmnjkHVkHkBpsk8T2MH26uM9Z_YEmCvWIVW5VMH2GQ";

export const eventTypeListAPi = () => {
  return Axios.get(BaseUrl, {
    headers: {
      Authorization: token,
    },
  })
    .then((result) => {
      console.log("result", result.data);
      return result.data;
    })
    .catch((err) => {});
};
