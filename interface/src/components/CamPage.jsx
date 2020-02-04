import React, { Component } from 'react'
import * as faceapi from 'face-api.js'
import { Link } from '@reach/router'
import { startVideo } from '../utils/utils'

export default class CamPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div class="w-screen h-screen">
        <h2>Webcam</h2>
        <Link to="/">
          <button onClick={() => {
            startVideo(false)
          }}>
            Return
          </button>
        </Link>
        <div id="container" class="w-screen h-screen flex flex-col justify-center items-center">
          <video autoPlay={true} id="videoElement" width="640" height="480" class="absolute">
          </video>
          <canvas id="canvasElement" class="absolute"></canvas>
        </div>
      </div>
    )
  }

  componentDidMount() {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/weights'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/weights'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/weights'),
      faceapi.nets.faceExpressionNet.loadFromUri('/weights')
    ]).then(startVideo(true))
  }
}
