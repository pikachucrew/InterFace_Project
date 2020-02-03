import axios from 'axios'
import * as util from './utils/utils'

export const postEmotions = (detections, username) => {
  const formattedEmotions = util.manipulateEmotions(detections)
  axios.post(`https://interface-backend-heroku.herokuapp.com/${username}`, formattedEmotions).then((response) => {
    console.log(response)
  }).catch(err => {
    console.log(err)
  })
}

export const getEmotions = async (username) => {
  const emotions = await axios.get(`https://interface-backend-heroku.herokuapp.com/${username}`)
  return emotions
}
