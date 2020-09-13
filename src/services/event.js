import Axios from "axios";

const BaseUrl = "https://ik-react-task.herokuapp.com/events/event_types/";

const token = "Bearer" + " " + localStorage.getItem("token").toString();

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
