import React, { Component } from 'react'
import * as faceapi from 'face-api.js'
import { Link } from '@reach/router'
import { startVideo } from '../utils/utils'

export default class CamPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>View Camera</h2>
        <div id="container">
          <video autoPlay={true} id="videoElement" width="640" height="480">
          </video>
          <canvas id="canvasElement"></canvas>
        </div>
        <Link to="/dashboard">
          <button>
            Return
          </button>
        </Link>
      </div>
    )
  }

  componentDidMount() {
    // import * as api from 'api'
    // const video = document.querySelector("#videoElement");
    // const canvas = document.querySelector('#canvasElement')

    console.log('in script.js')

    // const startVideo = () => {
    //   if (navigator.mediaDevices.getUserMedia) {
    //     navigator.mediaDevices.getUserMedia({ video: true })
    //       .then(function (stream) {
    //         video.srcObject = stream;
    //       })
    //       .catch(function (error) {
    //         console.log("Something went wrong!");
    //       });
    //   }
    // }

    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
      faceapi.nets.faceExpressionNet.loadFromUri('/weights')
    ]).then(startVideo())

    // video.addEventListener('play', () => {
    //   //const canvas = faceapi.createCanvasFromMedia(video)
    //   //document.body.append(canvas)
    //   const displaySize = { width: video.width, height: video.height }
    //   faceapi.matchDimensions(canvas, displaySize)
    //   setInterval(async () => {
    //     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()

    //     // console.log(detections)
    //     const resizedDetections = faceapi.resizeResults(detections, displaySize)
    //     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    //     faceapi.draw.drawDetections(canvas, resizedDetections)
    //     faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    //     faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    //   }, 100)
    // })
  }
}
