import axios from "axios";
import { __API_URL__ } from "../const";

export default function contactPost(firstName, lastName, email, message) {
  axios
    .post(`${__API_URL__}/api-urls/contact/`, {
      firstName,
      lastName,
      email,
      message,
    })
    .then((res) => res.data)
    .catch((err) => err);
}
