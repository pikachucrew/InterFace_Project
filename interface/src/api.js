import axios from "axios";
import * as util from "./utils/utils";

export const postEmotions = (detections, username) => {
  const formattedEmotions = util.manipulateEmotions(detections);
  axios
    .post(
      `http://callumrmckenna.pythonanywhere.com/${username}`,
      formattedEmotions
    )
    .catch(err => {
      console.log(err);
    });
};

export const getEmotions = async (username, from, to) => {
  const baseUrl = `http://callumrmckenna.pythonanywhere.com/${username}`;
  const emotions = await axios.get(baseUrl, {
    params: {
      from,
      to
    }
  }).catch(err => {
    console.log(err)
  })
  return emotions;
};

export const getLiveData = async (username, from) => {
  const baseUrl = `http://callumrmckenna.pythonanywhere.com/${username}`;
  const emotions = await axios.get(baseUrl, {
    params: {
      from
    }
  }).catch(err => {
    console.log(err)
  })
  return emotions;
}