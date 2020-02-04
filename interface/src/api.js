import axios from "axios";
import * as util from "./utils/utils";

export const postEmotions = (detections, username) => {
  const formattedEmotions = util.manipulateEmotions(detections);
  axios
    .post(
      `https://interface-backend-heroku.herokuapp.com/${username}`,
      formattedEmotions
    )
    .catch(err => {
      console.log(err);
    });
};

export const getEmotions = async (username, from, to) => {
  const baseUrl = `https://interface-backend-heroku.herokuapp.com/${username}`;
  const emotions = await axios.get(baseUrl, {
    params: {
      to,
      from
    }
  });
  return emotions;
};
